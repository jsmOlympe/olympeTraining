
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Business_Container_017b3aa8fae1e3d044dc = '017b3aa8fae1e3d044dc';
const _Project_0163d9594700fcf61e54            = '0163d9594700fcf61e54';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Business_Container_business_container_to_project_017b3aa8fd1659291b92 = '017b3aa8fd1659291b92';
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Project_dependenciesRel_ff02200000000000002b = 'ff02200000000000002b';


// Definition of tags used for newly created instances 
const _instance_of_Business_Container = db.assignTag('017cc1ae8d5377231553');
const _instance_of_Project = db.assignTag('017cc1ae8d53c6eb013d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';
const _PRIMORDIAL_100000000000000000dd         = '100000000000000000dd';
const _ROOT_OF_ROOTS_10000000000000000000      = '10000000000000000000';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Project
db.newInstance(_instance_of_Project, _Project_0163d9594700fcf61e54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'olympeTraining',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Project);
// :_instance_of_Business_Container
db.newInstance(_instance_of_Business_Container)
    .setModelTag(_Business_Container_017b3aa8fae1e3d044dc) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Project)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Business_Container, _Business_Container_business_container_to_project_017b3aa8fd1659291b92, _instance_of_Project);
db.assign(_instance_of_Project, _Object_containsRel_ff02200000000000000f          , _instance_of_Business_Container);
db.assign(_instance_of_Project, _Project_dependenciesRel_ff02200000000000002b     , _PRIMORDIAL_100000000000000000dd                  );
db.assign(_instance_of_Project, _Project_dependenciesRel_ff02200000000000002b     , _Core_100000000000000000df                        );
db.assignOptional(_instance_of_Project, _Object_gooRel_ff022000000000000003, _instance_of_Project);
db.assignOptional(_instance_of_Project, _Object_gooRel_ff022000000000000003, _ROOT_OF_ROOTS_10000000000000000000);
db.assignOptional(_instance_of_Project, _GOO_parentGooRel_ff02200000000000000u, _ROOT_OF_ROOTS_10000000000000000000);
db.assignOptional(_ROOT_OF_ROOTS_10000000000000000000, _Object_containsRel_ff02200000000000000f, _instance_of_Project);
db.assignOptional(_ROOT_OF_ROOTS_10000000000000000000, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Project);
