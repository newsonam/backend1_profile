// productschema of products
const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  
    userid: {
        type: String

    },
    location:
    {
        type: String

    },
    gender:
    {
        type: String

    },
    name:
    {
        type: String

    },
    userdate:
    {
        type: Date

    },
    usertime:
    {
        type:String
    },
    image:
    {
        type:String
    },

    active: Boolean,

    Date:
    {
        type: Date,
        default: Date.now

    }


});



const Data = new mongoose.model("UserDetails", dataSchema);


// insert records
const insertDocument = async () => {
    const result = await Data.insertMany(
        [
            {
             "userid": "EVT0001",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female01",
             "userdate": "5-Jan-23",
             "usertime": "09:05:23",
             "image":"images/Female01.jpg"
            },
            {
             "userid": "EVT0002",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male01",
             "userdate": "5-Jan-23",
             "usertime": "09:11:03",
             "image":"images/Male01.jpg"
            },
            {
             "userid": "EVT0003",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male02",
             "userdate": "5-Jan-23",
             "usertime": "10:04:05",
             "image":"images/Male02.jpg"
            },
            {
             "userid": "EVT0004",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female02",
             "userdate": "5-Jan-23",
             "usertime": "10:39:09",
             "image":"images/Female02.jpg"
            },
            {
             "userid": "EVT0005",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female03",
             "userdate": "5-Jan-23",
             "usertime": "11:14:13",
             "image":"images/Female03.jpg"
            },
            {
             "userid": "EVT0006",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male03",
             "userdate": "5-Jan-23",
             "usertime": "11:49:17",
             "image":"images/Male03.jpg"
            },
            {
             "userid": "EVT0007",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female04",
             "userdate": "5-Jan-23",
             "usertime": "12:24:21",
             "image":"images/Female04.jpg"
            },
            {
             "userid": "EVT0008",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male04",
             "userdate": "5-Jan-23",
             "usertime": "12:59:25",
             "image":"images/Male04.jpg"
            },
            {
             "userid": "EVT0009",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male05",
             "userdate": "5-Jan-23",
             "usertime": "13:34:29",
             "image":"images/Male05.jpg"
            },
            {
             "userid": "EVT0010",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female05",
             "userdate": "5-Jan-23",
             "usertime": "14:09:33",
             "image":"images/Female05.jpg"
            },
            {
             "userid": "EVT0011",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male06",
             "userdate": "5-Jan-23",
             "usertime": "14:44:37",
             "image":"images/Male06.jpg"
            },
            {
             "userid": "EVT0012",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male07",
             "userdate": "5-Jan-23",
             "usertime": "15:19:41",
             "image":"images/Male07.jpg"
            },
            {
             "userid": "EVT0013",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female06",
             "userdate": "5-Jan-23",
             "usertime": "15:54:45",
             "image":"images/Female06.jpg"
            },
            {
             "userid": "EVT0014",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female07",
             "userdate": "5-Jan-23",
             "usertime": "16:29:49",
             "image":"images/Female07.jpg"
            },
            {
             "userid": "EVT0015",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female08",
             "userdate": "6-Jan-23",
             "usertime": "17:04:53",
             "image":"images/Female08.jpg"
            },
            {
             "userid": "EVT0016",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male08",
             "userdate": "6-Jan-23",
             "usertime": "17:39:57",
             "image":"images/Male08.jpg"
            },
            {
             "userid": "EVT0017",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male09",
             "userdate": "6-Jan-23",
             "usertime": "18:15:01",
             "image":"images/Male09.jpg"
            },
            {
             "userid": "EVT0018",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female09",
             "userdate": "6-Jan-23",
             "usertime": "18:50:05",
             "image":"images/Female09.jpg"
            },
            {
             "userid": "EVT0019",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female10",
             "userdate": "6-Jan-23",
             "usertime": "19:25:09",
             "image":"images/Female10.jpg"
            },
            {
             "userid": "EVT0020",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male10",
             "userdate": "6-Jan-23",
             "usertime": "20:00:13",
             "image":"images/Male10.jpg"
            },
            {
             "userid": "EVT0021",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male11",
             "userdate": "6-Jan-23",
             "usertime": "20:35:17",
             "image":"images/Male11.jpg"
            },
            {
             "userid": "EVT0022",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female11",
             "userdate": "6-Jan-23",
             "usertime": "21:10:21",
             "image":"images/Female11.jpg"
            },
            {
             "userid": "EVT0023",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male12",
             "userdate": "6-Jan-23",
             "usertime": "21:45:25",
             "image":"images/Male12.jpg"
            },
            {
             "userid": "EVT0024",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female12",
             "userdate": "6-Jan-23",
             "usertime": "22:20:29",
             "image":"images/Female12.jpg"
            },
            {
             "userid": "EVT0025",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male13",
             "userdate": "6-Jan-23",
             "usertime": "22:55:33",
             "image":"images/Male13.jpg"
            },
            {
             "userid": "EVT0026",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female13",
             "userdate": "6-Jan-23",
             "usertime": "23:30:37",
             "image":"images/Female13.jpg"
            },
            {
             "userid": "EVT0027",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male14",
             "userdate": "7-Jan-23",
             "usertime": "00:05:41",
             "image":"images/Male14.jpg"
            },
            {
             "userid": "EVT0028",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male15",
             "userdate": "7-Jan-23",
             "usertime": "00:40:45",
             "image":"images/Male15.jpg"
            },
            {
             "userid": "EVT0029",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female14",
             "userdate": "7-Jan-23",
             "usertime": "01:15:49",
             "image":"images/Female14.jpg"
            },
            {
             "userid": "EVT0030",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female15",
             "userdate": "7-Jan-23",
             "usertime": "01:50:53",
             "image":"images/Female15.jpg"
            },
            {
             "userid": "EVT0031",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female16",
             "userdate": "7-Jan-23",
             "usertime": "02:25:57",
             "image":"images/Female16.jpg"
            },
            {
             "userid": "EVT0032",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male16",
             "userdate": "7-Jan-23",
             "usertime": "03:01:01",
             "image":"images/Male16.jpg"
            },
            {
             "userid": "EVT0033",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male17",
             "userdate": "8-Jan-23",
             "usertime": "03:36:05",
             "image":"images/Male17.jpg"
            },
            {
             "userid": "EVT0034",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male18",
             "userdate": "8-Jan-23",
             "usertime": "04:11:09",
             "image":"images/Male18.jpg"
            },
            {
             "userid": "EVT0035",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male19",
             "userdate": "8-Jan-23",
             "usertime": "04:46:13",
             "image":"images/Male19.jpg"
            },
            {
             "userid": "EVT0036",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female17",
             "userdate": "9-Jan-23",
             "usertime": "05:21:17",
             "image":"images/Female17.jpg"
            },
            {
             "userid": "EVT0037",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female18",
             "userdate": "9-Jan-23",
             "usertime": "05:56:21",
             "image":"images/Female18.jpg"
            },
            {
             "userid": "EVT0038",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male20",
             "userdate": "9-Jan-23",
             "usertime": "06:31:25",
             "image":"images/Male20.jpg"
            },
            {
             "userid": "EVT0039",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male21",
             "userdate": "9-Jan-23",
             "usertime": "07:06:29",
             "image":"images/Male21.jpg"
            },
            {
             "userid": "EVT0040",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male22",
             "userdate": "9-Jan-23",
             "usertime": "07:41:33",
             "image":"images/Male22.jpg"
            },
            {
             "userid": "EVT0041",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female19",
             "userdate": "9-Jan-23",
             "usertime": "08:16:37",
             "image":"images/Female19.jpg"
            },
            {
             "userid": "EVT0042",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female20",
             "userdate": "9-Jan-23",
             "usertime": "08:51:41",
             "image":"images/Female20.jpg"
            },
            {
             "userid": "EVT0043",
             "location": "Chennai",
             "gender": "Male",
             "name": "Male23",
             "userdate": "9-Jan-23",
             "usertime": "09:26:45",
             "image":"images/Male23.jpg"
            },
            {
             "userid": "EVT0044",
             "location": "Bangalore",
             "gender": "Female",
             "name": "Female21",
             "userdate": "9-Jan-23",
             "usertime": "10:01:49",
             "image":"images/Female21.jpg"
            },
            {
             "userid": "EVT0045",
             "location": "Bangalore",
             "gender": "Male",
             "name": "Male24",
             "userdate": "9-Jan-23",
             "usertime": "10:36:53",
             "image":"images/Male24.jpg"
            },
            {
             "userid": "EVT0046",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female22",
             "userdate": "9-Jan-23",
             "usertime": "11:11:57",
             "image":"images/Female22.jpg"
            },
            {
             "userid": "EVT0047",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female23",
             "userdate": "9-Jan-23",
             "usertime": "11:47:01",
             "image":"images/Female23.jpg"
            },
            {
             "userid": "EVT0048",
             "location": "Hyderabad",
             "gender": "Male",
             "name": "Male25",
             "userdate": "9-Jan-23",
             "usertime": "12:22:05",
             "image":"images/Male25.jpg"
            },
            {
             "userid": "EVT0049",
             "location": "Hyderabad",
             "gender": "Female",
             "name": "Female24",
             "userdate": "9-Jan-23",
             "usertime": "12:57:09",
             "image":"images/Female24.jpg"
            },
            {
             "userid": "EVT0050",
             "location": "Chennai",
             "gender": "Female",
             "name": "Female25",
             "userdate": "9-Jan-23",
             "usertime": "13:32:13",
             "image":"images/Female25.jpg"
            }
           ]
       
    );
}

// insertDocument();



module.exports = Data;