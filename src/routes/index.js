const express=require('express');
const router=express.Router();

const v1ApiRoutes=require('./v1/index')

router.use('/v1',v1ApiRoutes);

module.exports=router;// remember always





// const express=require('express');

// const router=express.Router();
// const v1ApiRoutes=require('./v1/index')
// router.use('/v1',v1ApiRoutes); // THIS LINE MEAN IF V1 ROUTE IS COMING REDIRET IT TO THE V1/INDEX FILE
// module.exports=router;// remember to export to use in index