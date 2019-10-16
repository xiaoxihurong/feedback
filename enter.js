var express=require('express')
var bodyParser=require('body-parser')

var app=express()

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public'))

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments})
})

app.get('/post',function(req,res){
	res.render('post.html')
})

// app.get('/pinglun',function(req,res){
// 	var comment=req.query
// 	comment.dateTime='2019-9-24'
// 	comments.unshift(comment)

// 	res.statysCode=302
// 	res.redirect('/')
// })

app.post('/pinglun',function(req,res){
	var comment=req.body
	comment.dateTime='2019-9-24'
	comments.unshift(comment)
	res.statusCode=302
	// res.setHeader('Location','/')
	res.redirect('/')
})

app.listen(500,function(){
	console.log("running")
})