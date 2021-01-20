//
//  main.m
//  6
//
//  Created by 朱双泉 on 2020/12/7.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // var context = new JSContext
        JSContext *context = [[JSContext alloc] init];
        
        // var result
        JSValue *result;
        
        // var result = context.evaluateScript(@"....");
        // result = [context evaluateScript:@"var x = 1;var p = new Promise(resolve => resolve());p.then(() => x = 3);x = 2"];
        
        // NSLog(@"%@", context[@"x"]);
        
        while (true) {
            char source[1024];
            printf("js:>");
            fgets(source, 1024, stdin);
            
            // var result = context.evaluateScript(source);
            result = [context evaluateScript:[NSString stringWithUTF8String:source]];
            NSLog(@"%@", result);
        }
        //        js:>var x = 1;
        //        2020-12-07 13:58:34.416307+0800 6[81509:2886505] undefined
        //        js:>var p = new Promise(resolve => resolve());p.then(() => x = 3);
        //        2020-12-07 13:59:04.418529+0800 6[81509:2886505] [object Promise]
        //        js:>x
        //        2020-12-07 13:59:18.048225+0800 6[81509:2886505] 3
        //        js:>
    }
    return 0;
}
