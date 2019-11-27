/**
 * Created by Administrator on 2017/7/5.
 */

//需求:创建一个动物类,这个类有名称和类型属性
//当找到一个名称为某个值的动物后,然后把和这个动物同种类型的数据库中存在的所有的都取出来
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test33');
//获取db
var db = mongoose.connection;
db.once('open',function () {

    console.log('open success');

})
//创建scheema
var animationSchema = mongoose.Schema({
    name:String,
    type:String,
    // friends:[];

})
//给shema扩展一个方法,来获取所有的符合条件的动物,我们找到具体的动物确定类型,所以需要动物
//具体的动物是一个实例,所以我们扩展实例方法
animationSchema.methods.findSameType = function (callBack) {
    //我们可以使用find方法,find方法是类来调用
    //使用类来调用find方法
    //this:表示实例
    //我们获取数据后需要在下面的地方使用,所以我们需要使用回调传递出去
    this.model('Animail').find({type:this.type},function (err,results) {
        callBack(err,results);

    })

}

//使用schema创建类
var Animail = mongoose.model('Animail',animationSchema);

//创建对象,在实际中,如果需求不需要用到具体的对象的名称,我们可以把创建对象和保存对象放在一起
// var a1 = new Animail({});
// a1.save();
//表示创建tom,而且保存
Animail.create({name:'tom',type:'cat'});
Animail.create({name:'kitty',type:'cat'});
Animail.create({name:'xiaohuang',type:'dog'});
Animail.create({name:'xiaohei',type:'dog'});

//当我们找到一只叫做tom猫后,我要把所有的和tom同种类型的动物都获取到
//我们可以扩展一个方法,来找到所有的同种类型的动物
//我们使用类来调用对应的方法
Animail.findOne({name:'tom'},function (err,result) {
    //findone:表示当匹配到一个条件后就停止匹配,所以只是找到一条
    //
    // console.log(result);

    //使用这个对象,调用对应的方法找到同种类型的所有的动物
    result.findSameType(function (err,results) {

        if(err){
            console.log('寻找失败');
            return;
        }
        //获取结果
        console.log(results);

    })

})

