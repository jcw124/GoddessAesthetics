//Define list of services
var services = [{
"title" : "Basic Facial",
"fee" : "$65",
"description" : "Leave your skin feeling refreshed and clean.  This custom facial includes a personal skin analysis and everything needed for your skin type. You will leave with recommendations for an at home care routine to help you achieve your skin care goals"
},
{
"title" : "European Massage",
"fee" : "$85",
"description" : "Basic facial with an anti-aging and revitalize massage that boosts circulation, relaxation and helps the skins overall appearance of the skin"
},
{
"title" : "Aromatherapy Facial",
"fee" : "$100",
"description" : "Basic facial with a blend of organic essential oils that help promote lymphatic drainage and boost circulation. Also includes a tension releasing massage of the face, shoulders,  neck, and back. "
},
{
"title" : "Back Facial",
"fee" : "$50",
"description" : "Custom facial of the back including a skin analysis and relaxing tissue massage of the back, neck and shoulders."
},
{
"title" : "Express Facial",
"fee" : "$40",
"description" : "In hurry? A simple version of the basic facial in under 30 min"
},
{
"title" : "Deep Pore Cleansing",
"fee" : "$95",
"description" : "Basic facial that helps unclog pores eliminating Whiteheads and blackheads, killing bacteria, ultimately trying to purify the cells to promote the overall appearance of the skin"
},
{
"title" : "Make-Up Application",
"fee" : "$45",
"description" : "Full face Makeup with the option of strip lashes or cluster lashes. Also includes costume makeup, or Scary Halloween FX!"
},
{"title" : "Classic Natural Eyelash Extensions",
"fee" : "$70",
"description" : "Individual eyelash to enhance the natural eyelash in length, curliness or volume. Enhances each eyelash with length. Additional Volume can be added for $10"
},
{
"title" : "Dramatic Lash Eyelash Extensions",
"fee" : "$90",
"description" : "Individual eyelash to enhance the natural eyelash in length, curliness or volume. Enhances each eyelash with length and drama. Gives your eyes a wispy pop. Additional Volume can be added for $10"
},
{
"title" : "Cat-Eye Eyelash Extensions",
"fee" : "$100",
"description" : "Individual eyelash to enhance the natural eyelash in length, curliness or volume. Enhances each eyelash with length and style. Gives your eyes a flirty wink. Additional Volume can be added for $10"
},
{
"title" : "Eyelash Extension Training Class",
"fee" : "$500",
"description" : "Includes: kit \(20 clients\), Lash manual,Branding/Marketing Tech,Certificate of Completion"
},
{
"title" : "Body Waxing",
"fee" : "Varies",
"description" : "Hair removal"
}
]

var addons = [
    {"addonTitle": "Microdermabrasion",
     "fee" : "$40"
    },
    {"addonTitle": "Chemical Peel",
    "fee" : "$25"
    },
    {"addonTitle": "Paraffin mask",
     "fee" : "$10"
    },
    {"addonTitle": "Paraffin \(hands and feet\)",
     "fee" : "$5"
    },
    {"addonTitle": "Hyperthermal mask",
     "fee" : "$30"
    }
]




// function openServicePopUp() {
//     document.getElementById("servicePopUp").style.display = "inline-block";
//     document.getElementById("booking_side_tab").style.display = "none";
//     console.log(serviceTitle);
//     console.log($(this).text());
// }
function closeServicePopUp() {
    document.getElementById("servicePopUp").style.display = "none";
    document.getElementById("booking_side_tab").style.display = "inline-block";
}

$('.serviceDiv').on('click', function() {
    var serviceTitle = $(this).text();

    document.getElementById("servicePopUp").style.display = "inline-block";
    document.getElementById("booking_side_tab").style.display = "none";
    for ( var i = 0 ; i < services.length; i++){
        if (serviceTitle.trim() == services[i].title){
            console.log(services[i].title);
            $('#popServiceTitle').text(services[i].title);
            $('#popServiceFee').text(services[i].fee);
            $('#popServiceDescription').text(services[i].description);
        }
    }
});
