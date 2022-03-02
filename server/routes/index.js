var express = require('express');
var router = express.Router();
var PDF = require( '../pdf')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Generate PDF and return the link */
router.post('/pdf', function(req, res, next) {
  const workspaceIdentifier= "sam@consultoriaexpat.com"
  const templateId=  390961
  console.log('vaccination payload received')
  console.log(JSON.stringify(req.body))


  var payload = req.body
  var qr =  `https://cvcovid-salud-mx.org/compruebaVacuna?id1=${payload.id.replace('-','')}&id2=${payload.digital_stamp}&date=${encodeURIComponent(payload.issueDate)}&curp=${payload.CURP}&name=${encodeURIComponent(payload.full_name)}&lot=${payload.lot_2}&fecha=${encodeURIComponent(payload.dose_2)}`
  payload.qr_data = qr
  console.log(templateId)
  console.log(workspaceIdentifier)

  PDF.generatePDFUrl("sam@consultoriaexpat.com", templateId, payload).then((results) => {
    res.send(results.response)
  }, (err) => {console.log("fail on")})

  //res.render('index', { title: 'Express' });
});


module.exports = router;
