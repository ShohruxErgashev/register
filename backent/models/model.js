import { Schema, model } from "mongoose";
//data schema
const conatctSchema = new Schema ({
    name: String,
    descr: String,
    number: String,
});

//data model
const Contact = model("Contact", conatctSchema);

export default Contact;