const Notes  = require('../modelschema')
//GET ALL NOTES
exports.getAll = async(req,res) => {
    try {
        const note = await Notes.find()
        res.json(note)
        }catch(err) {
            console.log('error' + err)
        }
}
//POST METHOD
exports.postnotes = async(req,res) => {
    const newobj = new Notes( {
        name : req.body.name,
        tech : req.body.tech,
        adderss : req.body.adderss
    })
    if (newobj.name === "" ||  newobj.tech === "" || newobj.adderss === "") {
        return res.status(400).json({ error: 'content missing' })
      }
    try {
        const a1 =  await newobj.save();
        res.json(a1);
    }catch(err) {
        console.log('error' + err)
    }
}
//GET UNIQUE NOTES
exports.getunique = async(req,res) => {
    try {
        const note = await Notes.findById(req.params.id)
        res.json(note);
    }catch(err) {
        console.log('error' + err);
    }
}
//DELETE UNIQUE NOTES
exports.deleteunique = async(req,res) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id)
        res.send("succesfully deleted....")
    }catch(err) {
        console.log(err)
    }
}
//UPDATA NOTES
exports.updatenotes = async(req,res) => {
    try {
        const notes = await Notes.findById(req.params.id);
        notes.name = req.body.name
        notes.tech = req.body.tech
        notes.adderss = req.body.adderss
        const a1= await notes.save()
        res.json(a1)
    }catch (err){
        res.json('error'+ err)
    }
}