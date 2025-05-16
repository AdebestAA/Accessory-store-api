const express = require("express")
const {getAllAccessories,addNewAccessory,getOnlyOneAccessory,editAccessory,deleteAccessory } = require("../controllers/accessories-controllers")
const router = express.Router()

router.get("/get-all-accessories",getAllAccessories)
router.get("/get/:id",getOnlyOneAccessory)
router.post("/add",addNewAccessory)
router.put("/update/:id",editAccessory)
router.delete("/delete/:id",deleteAccessory )

 module.exports = router


