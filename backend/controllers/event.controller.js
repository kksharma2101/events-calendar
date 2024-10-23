import Event from "../models/eventModel.js";
// import Event from "../models/eventModel.js"

export const eventController = async (req, res) => {
    try {
        const {title, discription, date} = req.body;
        if(!(title, discription, date)) {
            res.status(202).json({
                success:false,
                message: "All field is mandatory"
            })
        }
        const userEvents = await Event.create({title, discription, date});
        if(!userEvents) {
            res.status(202).json({
                success:false,
                message: "Events is not create, try again"
            })
        }

        res.status(200).json({
            success: true,
            message: "Events is create successfully",
            userEvents
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in create events",
            error
        })
    }
}