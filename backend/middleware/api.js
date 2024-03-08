const { movieModel } = require("../models/userSchema");



const middleWareApi = async (req,res, next) => {
    try {
        const data = await movieModel.findOne({ title: "movieInfos"});
        if (!data) {
            await movieModel.create({})
        }
        next()
    } catch(error) {
        console.log(error.message)
    }
}


module.exports = { middleWareApi }