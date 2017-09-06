var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");

var router = express.Router();
var bcrypt   = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");

var async = require('async');        //azeem ullah's commit
var multer  = require('multer');
var path = require('path');
const fs = require('fs');
var dbName = "sprout";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});



connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});
router.post("/inviteuser", function (req, res, next) {
    console.log(req.body.mailer_t);
    var html = "";
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: req.body.mailer_t , // list of receivers
        subject: 'Hello USama âœ”', // Subject line
        html: html // html body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.send("Something goes wrong!");
        }
        else {

            //console.log(req.body.email);
            //res.render('registration');
        }
    });
});
router.get('/testsmtp', function (req, res, next) {
    var description = "";
    var priority = "";
    var smtp_server = "";
    var smtp_port = "";
    var connection_security = "";
    var username = "";
    var password = "";
    console.log(req);
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'usama4slash@gmail.com',
            pass: 'usama4slash1234'
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo ðŸ‘»" <foo@blurdybloop.com>', // sender address
        to: 'theazeemullah@gmail.com', // list of receivers
        subject: 'Hello âœ”', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({status:"error",msg:"failed ho gaya"});
        }
        else {
            res.json({status:"success",msg:"passs ho gaya"});
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

});


router.post('/source', function (req, res, next) {

    connection.query("select * from source", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/jobspecific', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/deps', function (req, res, next) {

    connection.query("select * from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/emps', function (req, res, next) {

    connection.query("select * from employee", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/reqresponse', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/joblocation', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/emailss', function (req, res, next) {

    connection.query("select * from email_template", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/tags', function (req, res, next) {

    connection.query("select * from tags", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/tablestages', function (req, res, next) {
    connection.query("select * from stages", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/pipe', function (req, res, next) {
    connection.query("SELECT applicant.applicants_name,applicant.email,applicant.phone,applicant.appreciation,applications.application_tittle,applications.responsible_id,applications.source,applications.applied_job FROM applicant INNER JOIN applications ON applicant.id = applications.applicant_id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/job', function (req, res, next) {
    connection.query("SELECT  job_positions.id,job_positions.job_tittle, job_positions.status, job_positions.expected, job_positions.forcasted, job_positions.hiredemployees, job_positions.currentemployees, department.name FROM job_positions INNER JOIN department ON job_positions.department_id = department.id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/num5', function (req, res, next) {
    connection.query("select COUNT(*) as count from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/num', function (req, res, next) {
    connection.query("select COUNT(*) as count from stages", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/numdep', function (req, res, next) {

    connection.query("select COUNT(*) as count from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/letter', function (req, res, next) {

    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/letterEdits', function (req, res, next) {

    connection.query('SELECT * from application_documents  where  application_id='+"'"+ req.body.application_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/noofdoc', function (req, res, next) {

    connection.query('SELECT COUNT( * ) AS count FROM applications WHERE job_positions_id'+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/letterEditsjobs', function (req, res, next) {

    connection.query('SELECT * from applications  where  id='+"'"+ req.body.application_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/abc', function (req, res, next) {
    connection.query('SELECT * from job_positions  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/abcs', function (req, res, next) {
    connection.query('SELECT application_documents.application_id, application_documents.document_url, application_documents.type, applications.application_tittle FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id  where  job_positions_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/applicationsonjob', function (req, res, next) {
    connection.query('SELECT * from applications  where  stage_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/stageid', function (req, res, next) {

    connection.query('SELECT stage_id from applications  where  job_positions_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/applicationsonjob', function (req, res, next) {
    connection.query('SELECT * from applications  where  job_positions_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectstages', function (req, res, next) {

    connection.query("select * from stages", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/jobs', function (req, res, next) {
    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/jobss', function (req, res, next) {
    connection.query('SELECT * from job_positions  where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});

router.post('/contacts', function (req, res, next) {
    connection.query('SELECT * from contact  where id='+"'"+ req.body.contact_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectapplication', function (req, res, next) {
    connection.query('SELECT * from applications  where id='+"'"+ req.body.appid +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});

router.post('/lastappid', function (req, res, next) {
    connection.query('SELECT MAX( ID ) AS id FROM applications',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/lastapplicantid', function (req, res, next) {
    connection.query('SELECT MAX( ID ) AS id FROM applicant',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/lastcontactid', function (req, res, next) {
    connection.query('SELECT MAX( ID )+1 AS id FROM contact',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/tablestagesselect1', function (req, res, next) {

    connection.query('SELECT * from stages where id='+"'"+ req.body.a +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/dd', function (req, res, next) {

    connection.query('SELECT * from department where id='+"'"+ req.body.parent_dept_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});

router.post('/tablestagesselect', function (req, res, next) {
    connection.query('SELECT * from stages where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/jobselect', function (req, res, next) {
    connection.query('SELECT * from job_positions where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/usa', function (req, res, next) {

    connection.query('SELECT * FROM department WHERE id = ( SELECT MIN( id ) FROM department WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/jobpage', function (req, res, next) {

    connection.query('SELECT * FROM job_positions WHERE id = ( SELECT MIN( id ) FROM job_positions WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/stagepage', function (req, res, next) {

    connection.query('SELECT * FROM stages WHERE id = ( SELECT MIN( id ) FROM stages WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/usaa', function (req, res, next) {

    connection.query('SELECT * FROM department WHERE id = ( SELECT max( id ) FROM department WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/stagespages1', function (req, res, next) {

    connection.query('SELECT * FROM stages WHERE id = ( SELECT max( id ) FROM stages WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/jobpage2', function (req, res, next) {

    connection.query('SELECT * FROM job_positions WHERE id = ( SELECT max( id ) FROM job_positions WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/depss', function (req, res, next) {

    connection.query('SELECT * from department where id='+"'"+ req.body.id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/depsss', function (req, res, next) {
    connection.query('SELECT * from department where id='+"'"+ req.body.parent_dept_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/contacsss', function (req, res, next) {
    connection.query('SELECT * from contact where id='+"'"+ req.body.contact_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/depsssreq', function (req, res, next) {
    connection.query('SELECT * from department where id='+"'"+ req.body.department_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/sourceselect', function (req, res, next) {
    connection.query('SELECT * from source where id='+"'"+ req.body.source +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/response', function (req, res, next) {
    connection.query('SELECT * from user where id='+"'"+ req.body.responsible_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/applied_job', function (req, res, next) {
    connection.query('SELECT * from job_positions where id='+"'"+ req.body.applied_job +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/applicationselect', function (req, res, next) {
    connection.query('SELECT * from applicant where id='+"'"+ req.body.appids +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/tagss', function (req, res, next) {
    connection.query('SELECT * from applications_tags where applications_id='+"'"+ req.body.appid +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/selecttags', function (req, res, next) {
    connection.query('SELECT * from tags where id='+"'"+ req.body.tags_id +"'" +'',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/dep', function (req, res, next) {

    connection.query("SELECT A.id AS id, A.name AS DepartmentName1, B.name AS DepartmentName2, A.manager_id, em.employeename FROM department A, department B, employee em WHERE A.parent_dept_id = B.id AND A.manager_id = em.id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});





//==============================================Contacts================================================================
//createcontactstuff
router.post('/contacttable', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/company_name', function (req, res, next) {

    connection.query("select * from users_company", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/state', function (req, res, next) {

    connection.query("select * from country_states", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/country', function (req, res, next) {

    connection.query("select * from country", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectuser', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectacoount', function (req, res, next) {

    connection.query("select * from account", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//gridcontactstuff
router.post('/selectgrid', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//contactcreatestuff
router.post('/createcontact', function (req, res, next) {
    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("' + req.body.notes_id + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log(req.body);
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`individual`,`company`,`city`,`states`,`zip`,`country`,`title`,`website`,`job_position`,`phone_number`,`mobile_number`,`fax_number`,`email`,`language`,`notes_id`,`is_Customer`,`is_sales_person`,`sale_pricelist`,`internal_reference_id`,`account_reciveable`,`account_payable`,`is_vendor`,`barcode`,`customer_payment_terms`,`degree_of_trust`,`vendor_payment_terms`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.individual+'","'+req.body.company+'","'+req.body.city+'","'+req.body.states+'","'+req.body.zip+'","'+req.body.country+'","'+req.body.title+'","'+req.body.website+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.fax_number+'","'+req.body.email+'","'+req.body.language+'","'+results.insertId+'","'+req.body.is_Customer+'","'+req.body.is_sales_person+'","'+req.body.sale_pricelist+'","'+req.body.internal_reference_id+'","'+req.body.account_reciveable+'","'+req.body.account_payable+'","'+req.body.is_vendor+'","'+req.body.barcode+'","'+req.body.customer_payment_terms+'","'+req.body.degree_of_trust+'","'+req.body.vendor_payment_terms+'")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    connection.query('UPDATE contact_contacts_addresses SET parent_contact_id = "'+results.insertId+'" WHERE parent_contact_id = "'+ req.body.lasting +'"', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }
                    });
                }
            });
        }
    });
});
router.post('/createcontactmodal', function (req, res, next) {
    connection.query('INSERT INTO `contact_notes`(`notes`) VALUES ("' + req.body.mnotes_id + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log(req.body);
            connection.query('INSERT INTO `contact`(`name`,`street1`,`street2`,`city`,`states`,`zip`,`country`,`title`,`job_position`,`phone_number`,`mobile_number`,`email`,`notes_id`) VALUES ("'+req.body.name+'","'+req.body.street1+'","'+req.body.street2+'","'+req.body.city+'","'+req.body.states+'","'+req.body.zip+'","'+req.body.country+'","'+req.body.title+'","'+req.body.job_position+'","'+req.body.phone_number+'","'+req.body.mobile_number+'","'+req.body.email+'","'+results.insertId+'")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(req.body);
                    connection.query('INSERT INTO `contact_contacts_addresses`(`parent_contact_id`,`child_contact_id`) VALUES ("' + req.body.last + '","' + results1.insertId + '")', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }

                    });
                }
            });
        }
    });
});

//==================================================ContactInfo=========================================================
router.post('/selectcontactinfo', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectcontactinfo1', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectchild', function (req, res, next) {

    connection.query('SELECT contact.id,contact.name,contact.email,contact.job_position FROM contact WHERE contact.id IN (SELECT contact_contacts_addresses.child_contact_id FROM contact_contacts_addresses WHERE contact_contacts_addresses.parent_contact_id = "'+req.body.id+'")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
            console.log(results)
        }
    });

});
router.post('/mycontact', function (req, res, next) {

    connection.query('SELECT * from contact  where  id='+"'"+ req.body.child_contact_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectnote', function (req, res, next) {

    connection.query('SELECT * from contact_notes  where  id='+"'"+ req.body.notes_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });
});
router.post('/selectnote1', function (req, res, next) {

    connection.query('SELECT * from contact_notes  where  id='+"'"+ req.body.notes_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/selectaccount', function (req, res, next) {

    connection.query('SELECT name as aname from account    where  id='+"'"+ req.body.account_reciveable +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/account_payable', function (req, res, next) {

    connection.query('SELECT name as bname from account    where  id='+"'"+ req.body.account_payable +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/contactdeletes', function (req, res, next) {
    connection.query('DELETE  from contact where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/contactdeletes1', function (req, res, next) {
    connection.query('DELETE  from contact where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((EDITCONTACT))))))))))))))))))))))))))))))
router.post('/createcontactedit', function (req, res, next) {

    console.log(req.body);
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = "'+req.body.zip+'",country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'",company = "'+req.body.company+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'",language = "'+req.body.language+'",is_Customer = "'+req.body.is_Customer+'",is_sales_person = "'+req.body.is_sales_person+'",internal_reference_id = "'+req.body.internal_reference_id+'",is_vendor = "'+req.body.is_vendor+'",barcode = "'+req.body.barcode+'",account_reciveable = "'+req.body.account_reciveable+'",account_payable = "'+req.body.account_payable+'",vendor_payment_terms = "'+req.body.vendor_payment_terms+'",degree_of_trust = "'+req.body.degree_of_trust+'",customer_payment_terms = "'+req.body.customer_payment_terms+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = "'+ req.body.notes_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    //req.session.success = true;


});
router.post('/createcontacteditmodal', function (req, res, next) {

    console.log(req.body);
    connection.query('UPDATE contact SET name = "'+req.body.name+'",street1 = "'+req.body.street1+'",city = "'+req.body.city+'",states = "'+req.body.states+'",zip = "'+req.body.zip+'",country = "'+req.body.country+'",website = "'+req.body.website+'",street2 = "'+req.body.street2+'", job_position = "'+req.body.job_position+'",phone_number = "'+req.body.phone_number+'",mobile_number = "'+req.body.mobile_number+'",fax_number = "'+req.body.fax_number+'",email = "'+req.body.email+'",title = "'+req.body.title+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    connection.query('UPDATE contact_notes SET notes = "'+req.body.notes+'" WHERE id = "'+ req.body.notes_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
    //req.session.success = true;


});

//pagination of contact
router.post('/contactpage', function (req, res, next) {

    connection.query('SELECT * FROM contact WHERE id = ( SELECT max( id ) FROM contact WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
router.post('/contactpage2', function (req, res, next) {

    connection.query('SELECT * FROM contact WHERE id = ( SELECT MIN( id ) FROM contact WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });

});
router.post('/numcontact', function (req, res, next) {

    connection.query("select COUNT(*) as count from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});
//===******===========================================Contacts============******************============================
router.post('/lettertable', function (req, res, next) {

    connection.query("SELECT application_documents.application_id as id, application_documents.document_url, application_documents.type, applications.application_tittle, applications.date_created, applications.owner FROM application_documents INNER JOIN applications ON application_documents.application_id = applications.id", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});
        }
    });

});

router.post('/sources', function (req, res, next) {

    connection.query("select * from applicant", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedeps', function (req, res, next) {

    connection.query("select * from user", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedepss', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sourcedep', function (req, res, next) {

    connection.query("select * from department", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/selectemail', function (req, res, next) {

    connection.query('SELECT name from email_template where id='+"'"+ req.body.email_template_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/s', function (req, res, next) {

    connection.query('SELECT job_tittle from job_positions where id='+"'"+ req.body.job_specific +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/ss', function (req, res, next) {

    connection.query('SELECT company  from contact where id='+"'"+ req.body.job_location +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sss', function (req, res, next) {

    connection.query('SELECT name  from department where id='+"'"+ req.body.department_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/sb', function (req, res, next) {

    connection.query('SELECT username  from user where id='+"'"+ req.body.recruitment_responsible +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/manager', function (req, res, next) {

    connection.query('SELECT employeename from employee where id='+"'"+ req.body.manager_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/parentdep', function (req, res, next) {

    connection.query('SELECT name  from department where id='+"'"+ req.body.parent_dept_id +"'" +'', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/Editreq', function (req, res, next) {

    connection.query('UPDATE job_positions SET job_tittle = "'+req.body.job_tittle+'",department_id = "'+req.body.department_id+'",recruitment_responsible = "'+req.body.recruitment_responsible+'",job_location = "'+req.body.job_location+'", job_email = "'+req.body.job_email+'",expected = "'+req.body.expected+'",description = "'+req.body.description+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/Editapp', function (req, res, next) {

    connection.query('UPDATE applications SET application_tittle = "'+req.body.application_tittle+'",applied_job = "'+req.body.applied_job+'",department_id = "'+req.body.department_id+'",responsible_id = "'+req.body.responsible_id+'", source = "'+req.body.source+'",expected_salary = "'+req.body.expected_salary+'",expected_salary_extra = "'+req.body.expected_salary_extra+'",proposed_salary = "'+req.body.proposed_salary+'",proposed_salary_extra = "'+req.body.proposed_salary_extra+'",availability = "'+req.body.availability+'",application_summary = "'+req.body.application_summary+'" WHERE id = "'+ req.body.appid +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/Editapplicant', function (req, res, next) {

    connection.query('UPDATE applicant SET applicants_name = "'+req.body.applicants_name+'",contact_id = "'+req.body.contact_id+'",email = "'+req.body.email+'",phone = "'+req.body.phone+'", mobile = "'+req.body.mobile+'",degree = "'+req.body.degree+'",next_action_date = "'+req.body.next_action_date+'",next_action_description	 = "'+req.body.next_action_description+'",appreciation = "'+req.body.appreciation+'",referred_by = "'+req.body.referred_by+'" WHERE id = "'+ req.body.appids +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/edittag', function (req, res, next) {

    connection.query('UPDATE applications_tags SET tags_id = "'+req.body.tags_id+'" WHERE applications_id = "'+ req.body.appid +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/Editreqs', function (req, res, next) {

    connection.query('UPDATE department SET name = "'+req.body.name+'",parent_dept_id = "'+req.body.parent_dept_id+'",manager_id = "'+req.body.manager_id+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/reqjobs', function (req, res, next) {

    connection.query('UPDATE job_positions SET job_tittle = "'+req.body.job_tittle+'",status = "'+req.body.status+'",department_id = "'+req.body.department_id+'",recruitment_responsible = "'+req.body.recruitment_responsible+'",job_location = "'+req.body.job_location+'", job_email = "'+req.body.job_email+'",expected = "'+req.body.expected+'",description = "'+req.body.description+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/letterEdit', function (req, res, next) {
    console.log(req.body.type);
    connection.query('UPDATE application_documents SET document_url = "'+req.body.document_url+'", type = '+req.body.type+' WHERE application_id = "'+ req.body.application_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
    //req.session.success = true;
});
router.post('/letterEditss', function (req, res, next) {
    console.log(req.body.type);
    connection.query('UPDATE applications SET application_tittle = "'+req.body.application_tittle+'" WHERE id = "'+ req.body.application_id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
    //req.session.success = true;
});
router.post('/Editreq', function (req, res, next) {

    connection.query('UPDATE department SET name = "'+req.body.name+'", parent_dept_id = "'+req.body.parent_dept_id+'", manager_id = "'+req.body.manager_id+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

    //req.session.success = true;


});
router.post('/Editstages', function (req, res, next) {

    connection.query('UPDATE stages SET name = "'+req.body.name+'", job_specific = "'+req.body.job_specific+'", email_template_id = "'+req.body.email_template_id+'", folded = "'+req.body.folded+'", description = "'+req.body.description+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/deletejob', function (req, res, next) {
    connection.query('DELETE  from job_positions where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/delete', function (req, res, next) {
    connection.query('DELETE  from stages where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/deletes', function (req, res, next) {
    connection.query('DELETE  from department where id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }

    });


});
router.post('/deletesapp', function (req, res, next) {
    connection.query('DELETE  from applications_tags where applications_id='+"'"+ req.body.id +"'" +'', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {

            connection.query('DELETE  from applicant where id='+"'"+ req.body.ids +"'" +'', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(results1);
                    connection.query('DELETE  from applications where id='+"'"+ req.body.id +"'" +'', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }

                    })
                }

            });
        }
    });


});
router.post('/depinsert', function (req, res, next) {

    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.name+'","'+req.body.parent_dept_id+'","'+req.body.manager_id+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }// console.log(results);
    });
});
router.post('/documentinsert', function (req, res, next) {
    connection.query('INSERT INTO `application_documents`(`application_id`,`document_url`,`type`) VALUES ("'+req.body.document_url+'","'+req.body.type+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/depinserts', function (req, res, next) {

    connection.query('INSERT INTO `department`(`name`,`parent_dept_id`,`manager_id`) VALUES ("'+req.body.f+'","'+req.body.parent_dept_id+'","'+req.body.manager_id+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/stages', function (req, res, next) {

    connection.query('INSERT INTO `stages`(`name`,`job_specific`,`email_template_id`,`folded`,`description`) VALUES ("'+req.body.name+'","'+req.body.job_specific+'","'+req.body.email_template_id+'","'+req.body.folded+'","'+req.body.description+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/createstages', function (req, res, next) {

    connection.query('INSERT INTO `stages`(`name`) VALUES ("'+req.body.stagename+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/createapp', function (req, res, next) {

    connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`) VALUES ("'+req.body.id+'","'+req.body.title+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});

router.post('/settings', function (req, res, next) {

    connection.query('INSERT INTO `recruitment_setting`(`interview_form`,`notinterview_form`) VALUES ("'+req.body.interview_form+'","'+req.body.notinterview_form+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});

        }
        // console.log(results);
    });

});

router.post('/reqjob', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `job_positions`(`status`,`job_tittle`,`job_email`,`department_id`,`recruitment_responsible`,`expected`,`job_location`,`description`) VALUES ("'+req.body.status+'","'+req.body.job_tittle+'","'+req.body.job_email+'","'+req.body.department_id+'","'+req.body.recruitment_responsible+'","'+req.body.expected+'","'+req.body.job_location+'","'+req.body.description+'")', function (error, results, fields) {

        if (error) {
            res.json({"status": "failed", "message": error.message});

        }
        // console.log(results);
    });

});
router.post('/inserted', function (req, res, next) {

    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES ("'+req.body.applications_id+'","'+req.body.tagid+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
router.post('/stageinsert', function (req, res, next) {

    connection.query('INSERT INTO `stages`(`name`) VALUES ("'+req.body.stagename+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(req.body.id);
    });
});

router.post('/inserttags', function (req, res, next) {
    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES ("'+req.body.tagid+'","'+req.body.applications_id+'")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});

        else {
            console.log(err);
            res.send("Something goes wrong!");
        }
    });
});
router.post('/ktry', function (req, res, next) {
    connection.query('INSERT INTO `applicant`(`applicants_name`,`contact_id`,`email`,`phone`,`mobile`,`degree`,`next_action_date`,`next_action_description`,`appreciation`,`referred_by`) VALUES ("' + req.body.applicants_name + '","' + req.body.contact_id + '","' + req.body.email + '","' + req.body.phone + '","' + req.body.mobile + '","' + req.body.degree + '","' + req.body.next_action_date + '","' + req.body.next_action_description + '","' + req.body.appreciation + '","' + req.body.referred_by + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {

            connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`,`responsible_id`,`source`,`applied_job`,`department_id`,`expected_salary`,`expected_salary_extra`,`proposed_salary`,`proposed_salary_extra`,`availability`,`application_summary`,`applicant_id`,`stage_id`,`date_created`) VALUES ("' + req.body.job_positions_id + '","' + req.body.application_tittle + '","' + req.body.responsible_id + '","' + req.body.source + '","' + req.body.applied_job + '","' + req.body.department_id + '","' + req.body.expected_salary + '","' + req.body.expected_salary_extra + '","' + req.body.proposed_salary + '","' + req.body.proposed_salary_extra + '","' + req.body.availability + '","' + req.body.application_summary + '","' + results.insertId + '","' + req.body.stageid + '","' + getDateTime() + '")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {
                    console.log(results1);
                    connection.query('INSERT INTO `applications_tags`(`applications_id`,`tags_id`) VALUES ("' + results1.insertId + '","' + req.body.tags_id + '")', function (error, results1, fields) {
                        if (error) {
                            res.json({"status": "failed", "message": error.message});
                        }

                    })
                }

            });
        }

    });
});

router.post('/ok', function (req, res, next) {
    connection.query('INSERT INTO `applications`(`job_positions_id`,`application_tittle`) VALUES ("' + req.body.job_positions_id + '","' + req.body.application_tittle + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        else {
            console.log(results);
            connection.query('INSERT INTO `application_documents`(`application_id`,`document_url`,`type`) VALUES ("' + results.insertId + '","' + req.body.document_url + '","' + req.body.type + '")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                }
                else {

                }
            });
        }
        // console.log(results);
    });
});

router.post('/inserting', function (req, res, next) {
    connection.query('INSERT INTO `applicant`(`applicants_name`,`contact_id`,`email`,`phone`,`mobile`,`degree`,`next_action_date`,`next_action_description`,`appreciation`,`referred_by`,`applicant_id`) VALUES ("'+req.body.applicants_name+'","'+req.body.contact_id+'","'+req.body.email+'","'+req.body.phone+'","'+req.body.mobile+'","'+req.body.degree+'","'+req.body.next_action_date+'","'+req.body.next_action_description+'","'+req.body.appreciation+'","'+req.body.referred_by+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});
router.post('/contact', function (req, res, next) {

    connection.query("select * from contact", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/trys', function (req, res, next) {

    connection.query("select * from job_positions", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});

router.post('/try', function (req, res, next) {
    connection.query('INSERT INTO `job_positions`(`job_tittle`) VALUES ("'+req.body.title+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});




module.exports = router;

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}