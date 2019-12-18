age = 16

# CoffeeScript的缩进是严格要求的,也就是说如果使用了tab作为缩减,就一直使用tab,如果使用了空格就一直用空格
if age > 18
  console.log "成年人"
else
  console.log "未成年人"


# 成绩
scope = 98

if scope < 60
  console.log '不及格'
else if 60 < scope < 80
  console.log "良好"
else if 80 < scope < 100
  console.log "优秀"
