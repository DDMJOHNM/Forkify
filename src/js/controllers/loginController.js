
//Authentication Route
exports.loginController = (req,res,next) =>{
    if(req.method == 'GET' ){       
        res.render('login/login')
    }
   
};

exports.registerController = (req,res,next) =>{
    if(req.method == 'GET' ){       
        res.render('login/register')
    }
   
};

exports.indexController = (req,res,next) =>{
    if(req.method == 'GET' ){       
        res.render('index/index')
    }
   
};