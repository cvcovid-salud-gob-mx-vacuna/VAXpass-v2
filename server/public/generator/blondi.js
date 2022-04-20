//Consultoria expat's doctor is a canid of unknown provenance named after Hiter's Alsatian
//We hate hitler too, but we just want to be controversial
//He is part timber wolf, part dog, and learned that cigarettes and marijuana are tasty from watching
//us and our clients. Yesterday he got stoned off his ass 
//Please respect the timberwolf and do not steal our API keys, they won't help you anyway

var Airtable= require("airtable")
var base = new Airtable({apiKey: 'key4l8U6KlqvHBBc4'}).base('apph9Z1VNKOuMLOye');


var uuid = function () {
  var ret = '',
    value;
  for (var i = 0; i < 32; i++) {
    value = (rand() * 16) | 0;
    // Insert the hypens
    if (i > 4 && i < 21 && !(i % 4)) {
      ret += '-';
    }
    // Add the next random character
    ret += (i === 12 ? 4 : i === 16 ? (value & 3) | 8 : value).toString(
      16
    );
  }
  return ret;
};

var rand = function () {
  return Math.random();
};

const zeroPad = (num, places) => String(num).padStart(places, '0');

const getRandomLot = (prefix) => {
  return zeroPad(parseInt(Math.random() * 10000), 4);
};
const getRandomRegistry = () => {
    return zeroPad(parseInt(Math.random() * 100000000, 8))
}
const calculateAge= (dob) => { // birthday is a date
      var ageDifMs = Date.now() - dob.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const getFuckedUpDateText= (ISODate) => {
  var yyyymmdd = ISODate.replace("-", "").replace("-", "")
  return `${yyyymmdd[6]}  ${yyyymmdd[7]}  ${yyyymmdd[4]}  ${yyyymmdd[5]}  ${yyyymmdd[2]}  ${yyyymmdd[3]}`
}


const airTablePublicURL = "https://airtable.com/shryQ0b5DT3Z1VDSE/tblJ2xZCpq4FQGQFM/viw1T4Wh8BbpqWWm5?blocks=bliEKTPvF3KuWbljp"
const screenshotURLs=
[
  "https://shot.screenshotapi.net/screenshot?&url=https%3A%2F%2Fairtable.com%2FshryQ0b5DT3Z1VDSE%2FtblJ2xZCpq4FQGQFM%2Fviw1T4Wh8BbpqWWm5%3Fblocks%3DbliWmTRuHIhDN80XY&width=2560&height=1440&fresh=true&output=image&file_type=png&wait_for_event=load&delay=25000&clip%5Bx%5D)=815&clip%5By%5D)=155&clip%5Bheight%5D)=1200&clip%5Bwidth%5D)=930&c="+Math.random(),
  "https://shot.screenshotapi.net/screenshot?&url=https%3A%2F%2Fairtable.com%2FshryQ0b5DT3Z1VDSE%2FtblJ2xZCpq4FQGQFM%2Fviw1T4Wh8BbpqWWm5%3Fblocks%3DbliEKTPvF3KuWbljp&width=2560&height=1440&fresh=true&output=image&file_type=png&wait_for_event=load&delay=25000&clip%5Bx%5D)=815&clip%5By%5D)=155&clip%5Bheight%5D)=1200&clip%5Bwidth%5D)=930&c="+Math.random(),
  "https://shot.screenshotapi.net/screenshot?&url=https%3A%2F%2Fairtable.com%2FshryQ0b5DT3Z1VDSE%2FtblJ2xZCpq4FQGQFM%2Fviw1T4Wh8BbpqWWm5%3Fblocks%3DblilOmpbIBREl62nA&width=2560&height=1440&fresh=true&output=image&file_type=png&wait_for_event=load&delay=25000&clip%5Bx%5D)=815&clip%5By%5D)=155&clip%5Bheight%5D)=1200&clip%5Bwidth%5D)=930&c="+Math.random()
]

const blondi = () => {

  var step3Html =`
          <section id="step-3-html" class="bg-light pb-3 pt-1 mt-0">
          <div class="container " id="hamster">
              <div class="bg-white p-4 shadow"> 
                  <h2>Step 3/3 - Rendering Your Documents</h2>

                  <p><strong></i>We are generating your custom Vax package now... this may take awhile. Please do not reload the page or close this tab</i></strong></p>
                  <div class="with-status">
                      <h3>Document 1: Certificado de Vacunacion</h3>

                      <div class="text-center" id="document1">
                          <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                      </div>
                      <img x-spinner="document1" class="documento img-fluid" src="${screenshotURLs[0]}&token=JPPFM7E-J4K4RBM-P6WNYF1-A71X9AA" />
                  
                      <p>The most important document in the package for the majority of travelers, the certificado is otherwise known as a vaxpass, and provides information about your first 2 doses, along with the number from your ID and a special QR code.
                         When scanned, this code launches a special app that loads the encrypted data in the code, decodes it, and displays some of your information to show the pass is valid
                         </p>
                  </div>

                                         
                      <h3>Document 2: Dose Receipts (1 and 2)</h3>
                      <div class="with-status">
                          <div class="text-center" id="document2">
                          <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                          </div>
                          <img x-spinner="document2" class="documento img-fluid" src="${screenshotURLs[1]}&token=JPPFM7E-J4K4RBM-P6WNYF1-A71X9AA" />
                          
                          <p>These are the receipts you received at the official IMSS vax center, located at the address
                          indicated on these cards. Since these were given to you on paper, you may wish to PRINT this 
                          file, CUT on the dotted line, and finally TAKE PHOTOS of the separated dose receipts...
                          It is useful for apps like ArriveCan</p>

                      </div>



                      <div class="with-status">
                          <h3>Document 3: Booster (New All-In-One Format)</h3>

                          <div id="document3" class="text-center">
                          <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                          </div>

                          <img x-spinner="document3" class="documento img-fluid" src="${screenshotURLs[2]}&token=JPPFM7E-J4K4RBM-P6WNYF1-A71X9AA" />
                      
                          <p>The booster (dose 3 documents) are a slightly different style than the docs used for dose 1 and 2
                          Clearly the Mexicans decided to streamline the process, as the booster 
                          is a single card that is both QR and receipts on a single page. It does not 
                          need to be printed, but if you don't print it, please crop the image to the 
                          single card!</p>

                      
                      </div>



          </section>

                 `


  var step2Html=`   
      <section id="step-2-html" class="bg-light pb-3 pt-1 mt-0">
          <div class="container ">
          <div class="bg-white p-4 shadow"> 
           
                  <h2>Step 2/3 - Processing Data</h2>

                  <div class="text-center  with-status">
                      <div class="spinner-border" role="status">
                          <span class="visually-hidden">Please wait while your QR code is being programmed... this may take 10 seconds</span>
                      </div>
                  </div>
          </div>
          </div>
      </section>`

  $("#vpx-content").html("")
  $("#vpx-content").html(step2Html)
  setTimeout(() => {
      $("#vpx-content").html("")
      $("#vpx-content").html(step3Html)
      console.log("DB insert complete... Begin render")
      setTimeout(() => {
            //Live binding is fucking up... so we will add the
            //event handlers to the img tags which display the documents
            //after they are picked up by the DOM

            //When the documents render, turn off the spinny thing
            $("img.documento").on("load", (el) => {
                var spinnerId =  el.target.attributes["x-spinner"].value

                console.log("Hiding spinner "+spinnerId)
                $("#"+spinnerId).hide() //the image has loaded
            })
        });
          
      /*
      setTimeout(() => {
          $(".with-status strong").hide()
          $(".with-status .spinner-border").hide()
          $(".documento").css("opacity", "1")
          console.log("Images exposed... render delay finished")
      }, 45000) */
      //todo turn off waitspin when loaded
  }, 10000) 
  //Let the Renderer do its thing
  //And thats all she wrote. Will this actually work?

}
var addToAirtable= (formDataCleaned) => {
  base('Vaccinations').create([ {
          "fields": {
              "CURP":formDataCleaned.CURP,
              "Email": formDataCleaned.email,
              "First Dose": formDataCleaned.dose_1,
              "Second Dose": formDataCleaned.dose_2,
              "Booster Date": formDataCleaned.dose_3,
              "Dose 1 Date Text": getFuckedUpDateText(formDataCleaned.dose_1),
              "Dose 2 Date Text": getFuckedUpDateText(formDataCleaned.dose_2),
              "Booster 1 Date Text": getFuckedUpDateText(formDataCleaned.dose_3),
              "Full Name": formDataCleaned.full_name,
              "Vaccine Type": formDataCleaned.marca,
              "Booster Type": formDataCleaned.marca,
              "First Dose Lot":formDataCleaned.lot_1,
              "Second Dose Lot": formDataCleaned.lot_2,
              "Booster 1 Lot": formDataCleaned.lot_3,
              "Issue Date": formDataCleaned.issueDate,
              "Registry ID": formDataCleaned.registry_id,
              "Digital Stamp": formDataCleaned.digital_stamp,
              /*
              "Customer": [
                  "recPTxGVN4V8w128E"
              ],
              "Order": [
                  "recz15026dUm2elPn"
              ],*/
              "Age": calculateAge(new Date(formDataCleaned.dob)),
              "Sex": formDataCleaned.sexo,
              "City of Vaccination": formDataCleaned.vaxcenter,
              "Booster City/State": formDataCleaned.vaxcenter    
          }
          }]).then((result) => {
              console.log("Airtable API Call Complete... waiting 10,000ms for Airtable to flush to storage")
              blondi()
          })
      }

          $(document).ready(() => {
              
              $("#vaxcenter").on("change", (el) => {
                  $("#trailerOfDoom").html($(el.target).val())
              })
              $("#generatePreview").on("click", () =>{
                var address = $("#trailerOfDoom").html()

                $('#generatePreview').html("Submitting...")
                $("#generatePreview").html("disabled", "disabled") // do not allow repeat clicks
                var u1= uuid().substr(0,10)
                var u2=uuid() 
                let vaccinationData = {
                    dob: $("#dob").val(),
                    id: u1,
                    email: $("#email").val(),
                    record_locator: u2,
                    CURP: $('#passport').val(),
                    full_name: $('#name').val(),
                    dose_1: $('#dose1date').val(),
                    dose_2: $('#dose2date').val(),
                    dose_3: $('#dose3date').val(),
                    lot_1:'FM' + getRandomLot(),
                    lot_2: 'FM' + getRandomLot(),
                    lot_3: 'LK' + getRandomLot(),
                    sexo: $("#sexo").val(),
                    marca: $('#marca').val(),
                    digital_stamp: u2,
                    issueDate: $("#issueDateStamp").val(),
                    vaxcenter: address,
                    boostervaxcenter: address,
                    registry_id: "A40-4"+ (parseInt(Math.random() * 3000000) + 2000000)
                };
                console.log("Adding to Airtable Vaccinations")
                addToAirtable(vaccinationData)

                /* Use the pdf generation api instead of airtable
                 * while this requires migrating all the image templates... 
                 * it is a lot faster and less hacky than our current solution of:
                 * website -> airtable (by API) -> wait 10 seconds -> deploy a bot in the form of 
                 * browser automation -> load airtable UI -> wait 30 seconds for airtable graphical 
                 * reports to load -> take screenshot and crop it, display
                 * regardless, our current solution will still let us inherit the earth and 
                 * bring the fascists to their knees. Do you want to see bonnie henry on her knees?
                 * Me neither. I don't think she could suck a cock if you paid her a million dollars. 
                 * But it would be fun to watch her try... while a parade of omicron-infected Wolf-Dog
                 * hybrids flout the covid and the endangered species laws and lick her face 
                $.post( "/pdf?workspace=sam@consultoriaexpat.com&template=390961", vaccinationData, function( result ) {
                    console.log(JSON.stringify(result))
                }, "json");*/

              return false;
      })

  })
