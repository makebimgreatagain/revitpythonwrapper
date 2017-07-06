Search.setIndex({docnames:["base","builtins","collections","collector","dynamo","element","exceptions","forms","geometry","index","known_issues","parameters","reference","revit","revitpythonshell","selection","tests","transaction","utils"],envversion:52,filenames:["base.rst","builtins.rst","collections.rst","collector.rst","dynamo.rst","element.rst","exceptions.rst","forms.rst","geometry.rst","index.rst","known_issues.rst","parameters.rst","reference.rst","revit.rst","revitpythonshell.rst","selection.rst","tests.rst","transaction.rst","utils.rst"],objects:{"rpw.__revit":{Revit:[13,3,1,""]},"rpw.__revit.Revit":{active_view:[13,0,1,""],app:[13,0,1,""],doc:[13,0,1,""],docs:[13,0,1,""],host:[13,0,1,""],open:[13,4,1,""],process:[13,0,1,""],process_id:[13,0,1,""],process_name:[13,0,1,""],uidoc:[13,0,1,""],username:[13,0,1,""],version:[13,0,1,""]},"rpw.base":{BaseObjectWrapper:[0,3,1,""]},"rpw.base.BaseObjectWrapper":{__init__:[0,4,1,""],unwrap:[0,4,1,""]},"rpw.db":{Area:[5,3,1,""],AreaScheme:[5,3,1,""],Category:[5,3,1,""],Collector:[3,3,1,""],Element:[5,3,1,""],ElementCollection:[2,3,1,""],ElementSet:[2,3,1,""],Family:[5,3,1,""],FamilyInstance:[5,3,1,""],FamilySymbol:[5,3,1,""],Parameter:[11,3,1,""],ParameterFilter:[3,3,1,""],ParameterSet:[11,3,1,""],Reference:[12,3,1,""],Room:[5,3,1,""],Transaction:[17,3,1,""],Wall:[5,3,1,""],WallCategory:[5,3,1,""],WallKind:[5,3,1,""],WallType:[5,3,1,""],XYZ:[8,3,1,""],XyzCollection:[2,3,1,""],builtins:[1,2,0,"-"],collection:[2,2,0,"-"],collector:[3,2,0,"-"],element:[5,2,0,"-"],parameter:[11,2,0,"-"],reference:[12,2,0,"-"],transaction:[17,2,0,"-"]},"rpw.db.Area":{area:[5,0,1,""],name:[5,0,1,""],scheme:[5,0,1,""]},"rpw.db.AreaScheme":{areas:[5,0,1,""],name:[5,0,1,""]},"rpw.db.Category":{_builtin_enum:[5,0,1,""],families:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],symbols:[5,0,1,""]},"rpw.db.Collector":{__init__:[3,4,1,""],_collect:[3,4,1,""],element_ids:[3,0,1,""],elements:[3,0,1,""],first:[3,0,1,""],select:[3,4,1,""],wrapped_elements:[3,0,1,""]},"rpw.db.Element":{"delete":[5,4,1,""],__init__:[5,4,1,""],__new__:[5,5,1,""],collect:[5,6,1,""],from_id:[5,5,1,""],from_int:[5,5,1,""]},"rpw.db.ElementCollection":{ToString:[2,4,1,""],append:[2,4,1,""],as_element_id_list:[2,0,1,""],as_element_list:[2,0,1,""],clear:[2,4,1,""],element_ids:[2,0,1,""],elements:[2,0,1,""],pop:[2,4,1,""],select:[2,4,1,""],wrapped_elements:[2,0,1,""]},"rpw.db.ElementSet":{add:[2,4,1,""],as_element_id_list:[2,0,1,""],as_element_list:[2,0,1,""],clear:[2,4,1,""],element_ids:[2,0,1,""],elements:[2,0,1,""],pop:[2,4,1,""],select:[2,4,1,""],wrapped_elements:[2,0,1,""]},"rpw.db.Family":{category:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],siblings:[5,0,1,""],symbols:[5,0,1,""]},"rpw.db.FamilyInstance":{category:[5,0,1,""],family:[5,0,1,""],siblings:[5,0,1,""],symbol:[5,0,1,""]},"rpw.db.FamilySymbol":{category:[5,0,1,""],family:[5,0,1,""],instances:[5,0,1,""],name:[5,0,1,""],siblings:[5,0,1,""]},"rpw.db.Parameter":{__init__:[11,4,1,""],builtin:[11,0,1,""],builtin_id:[11,0,1,""],name:[11,0,1,""],type:[11,0,1,""],value:[11,0,1,""]},"rpw.db.ParameterFilter":{__init__:[3,4,1,""],from_element_and_parameter:[3,5,1,""]},"rpw.db.ParameterSet":{__getitem__:[11,4,1,""],__init__:[11,4,1,""],__setitem__:[11,4,1,""],all:[11,0,1,""]},"rpw.db.Reference":{as_global_pt:[12,0,1,""],as_uv_pt:[12,0,1,""],get_element:[12,4,1,""],get_geometry:[12,4,1,""],id:[12,0,1,""]},"rpw.db.Room":{is_bounded:[5,0,1,""],is_placed:[5,0,1,""],name:[5,0,1,""],number:[5,0,1,""]},"rpw.db.Transaction":{ensure:[17,5,1,""]},"rpw.db.XYZ":{__init__:[8,4,1,""],as_dict:[8,0,1,""],as_tuple:[8,0,1,""],at_z:[8,4,1,""],x:[8,0,1,""],y:[8,0,1,""],z:[8,0,1,""]},"rpw.db.XyzCollection":{average:[2,0,1,""],max:[2,0,1,""],min:[2,0,1,""],sorted_by:[2,4,1,""]},"rpw.db.builtins":{_BiCategory:[1,3,1,""],_BiParameter:[1,3,1,""]},"rpw.db.builtins._BiCategory":{from_category_id:[1,4,1,""],get:[1,4,1,""],get_id:[1,4,1,""]},"rpw.db.builtins._BiParameter":{get:[1,4,1,""],get_id:[1,4,1,""]},"rpw.db.collection.XyzCollection.point_collection":{average:[2,0,1,""],max:[2,0,1,""],min:[2,0,1,""]},"rpw.db.collector.Collector.collector":{elements:[3,0,1,""],first:[3,0,1,""],wrapped_elements:[3,0,1,""]},"rpw.db.element.Element":{parameters:[5,0,1,""],unwrap:[5,4,1,""]},"rpw.db.element.Element.parameters":{builtins:[5,0,1,""]},"rpw.db.parameter.Parameter":{_revit_object:[11,0,1,""]},"rpw.db.parameter.ParameterSet":{_revit_object:[11,0,1,""]},"rpw.exceptions":{RpwCoerceError:[6,7,1,""],RpwException:[6,7,1,""],RpwParameterNotFound:[6,7,1,""],RpwTypeError:[6,7,1,""],RpwWrongStorageType:[6,7,1,""]},"rpw.ui":{Pick:[15,3,1,""],Selection:[15,3,1,""],forms:[7,2,0,"-"],selection:[15,2,0,"-"]},"rpw.ui.Pick":{_pick:[15,4,1,""],pick_box:[15,4,1,""],pick_by_rectangle:[15,4,1,""],pick_edge:[15,4,1,""],pick_element:[15,4,1,""],pick_face:[15,4,1,""],pick_linked_element:[15,4,1,""],pick_pt:[15,4,1,""],pick_pt_on_element:[15,4,1,""]},"rpw.ui.Selection":{__bool__:[15,4,1,""],__init__:[15,4,1,""],add:[15,4,1,""],clear:[15,4,1,""],update:[15,4,1,""]},"rpw.ui.forms":{Alert:[7,3,1,""],Button:[7,3,1,""],CheckBox:[7,3,1,""],ComboBox:[7,3,1,""],Console:[7,3,1,""],FlexForm:[7,3,1,""],Label:[7,3,1,""],SelectFromList:[7,8,1,""],Separator:[7,3,1,""],TextBox:[7,3,1,""],TextInput:[7,8,1,""],console:[7,2,0,"-"],select_file:[7,8,1,""],select_folder:[7,8,1,""]},"rpw.ui.forms.Alert":{__init__:[7,4,1,""]},"rpw.ui.forms.Button":{__init__:[7,4,1,""]},"rpw.ui.forms.CheckBox":{__init__:[7,4,1,""]},"rpw.ui.forms.ComboBox":{__init__:[7,4,1,""]},"rpw.ui.forms.FlexForm":{__init__:[7,4,1,""],close:[7,4,1,""],get_values:[7,5,1,""],show:[7,4,1,""]},"rpw.ui.forms.Label":{__init__:[7,4,1,""]},"rpw.ui.forms.TextBox":{__init__:[7,4,1,""]},"rpw.ui.forms.console.FlexForm":{values:[7,0,1,""]},"rpw.utils":{coerce:[18,2,0,"-"]},"rpw.utils.coerce":{dictioary_to_string:[18,8,1,""],to_category:[18,8,1,""],to_class:[18,8,1,""],to_element_ids:[18,8,1,""],to_elements:[18,8,1,""],to_iterable:[18,8,1,""],to_pascal_case:[18,8,1,""]},XYZ:{_revit_object:[8,0,1,""]},rpw:{DB:[13,1,1,""],UI:[13,1,1,""],__revit:[13,2,0,"-"],base:[0,2,0,"-"],exceptions:[6,2,0,"-"]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","data","Python data"],"2":["py","module","Python module"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"],"7":["py","exception","Python exception"],"8":["py","function","Python function"]},objtypes:{"0":"py:attribute","1":"py:data","2":"py:module","3":"py:class","4":"py:method","5":"py:staticmethod","6":"py:classmethod","7":"py:exception","8":"py:function"},terms:{"0ecd":15,"221c":15,"41a5099b2f9f":15,"boolean":10,"case":[0,3,5,10,16,18],"class":[0,1,2,3,5,6,7,8,9,11,12,13,15,16,17,18],"default":[2,3,5,7,16],"enum":[1,5,7],"float":[3,7,8,11,16],"function":[0,1,3,5,7,16,17],"import":[0,1,2,3,4,5,6,7,8,9,11,12,13,15,16,17,18],"int":[2,5,7,11,16,18],"new":[5,7,8,13],"return":[0,1,2,3,5,7,8,11,12,13,15,16,17,18],"static":[3,5,7,17],"super":[0,1,2,3,5,6,8,11,12,15,17],"true":[0,2,3,5,7,10,12,15,16,17,18],"try":[0,1,2,3,5,7,9,11,13,16,17],"var":7,AND:16,Adding:7,BUT:16,FOR:16,For:[3,5,7],Has:16,Ids:[2,3,16,18],NOT:16,Not:[5,11],RPS:[7,13],THE:16,THESE:16,Tes:16,That:9,The:[3,4,5,7,9,10,11,13,14,16],There:[5,9],These:[1,5,11,16],USE:16,Use:[2,3,5,17],Used:[3,7],Useful:7,Uses:[3,5,7,16],WITH:16,Will:7,__bool__:[2,3,15],__class__:[0,5,7,16],__contains__:2,__dict__:[0,7],__dir__:0,__enter__:17,__eq__:[8,11],__exit__:17,__file__:16,__ge__:11,__getattr__:[0,1],__getitem__:[2,3,11],__gt__:[11,13],__init__:[0,1,2,3,5,6,7,8,11,12,13,15,17],__iter__:[2,3,18],__le__:11,__len__:[2,3,11],__lt__:[11,13],__main__:7,__name__:[0,5,7,16],__ne__:11,__new__:5,__repr__:[0,2,3,5,7,8,11,12,13,15,16,17],__revit:13,__revit__:[9,13],__setattr__:0,__setitem__:11,__str__:13,_bicategori:1,_biparamet:1,_builtin_enum:5,_builtinparameterset:11,_collect:3,_collector:3,_collector_param:5,_element:2,_element_dict:2,_getfram:7,_host:13,_index:7,_paramet:11,_pick:15,_revit_object:[0,3,5,8,11,12,15,17],_revit_object_categori:5,_revit_object_class:[0,1,3,5,8,11,12,15,17],abc:7,abcmeta:7,abl:[4,7],about:7,abov:[3,5,16],ac_opt:7,acccess:5,accept:18,acceptsreturn:7,access:[0,3,5,9,13],acess:0,achiev:10,across:[9,16],action:16,active_view:[13,16],activeuidocu:[9,13,15],activeview:[13,16],actual:5,add:[2,3,4,5,7,9,11,13,14,15,16,17],added:[5,13],adding:15,addit:[7,9],addition:3,addrefer:[7,9,13],addreferencebypartialnam:13,addreferencetofileandpath:7,adjust:5,advanc:3,advantag:[2,11],after:[7,17],against:3,all:[0,3,5,7,9,11,13,15,16],all_id:16,all_model_family_nam:5,all_model_instance_com:[11,16],all_model_type_nam:5,all_symbol:16,allow:[0,3,5,7,11],along:13,alreadi:[0,1,18],also:[5,9,11,13,15,16],altern:[3,5],alwai:[4,10,13,18],and_filt:3,ani:[0,2,3,4,5,7,8,11,12,15,16,17,18],anyrevitpropertyormethod:0,api:[2,3,10],apiobject:0,app:[9,13],append:[2,3,4,5,7,13,16],append_histori:7,appendtext:7,appli:[3,17],applic:[9,13,16],appropri:7,architectur:[3,5,7,16],area:[5,16],area_scheme_id:5,areafilt:3,areaschem:[5,16],areatagfilt:3,arg:[0,1,2,3,5,7,8,11,15,17,18],argument:[0,3,7,10],aris:16,around:7,as_dict:8,as_element_id_list:[2,15],as_element_list:2,as_global_pt:12,as_tupl:8,as_uv_pt:12,asdoubl:11,aselementid:11,asinteg:11,assembl:9,assert:[16,17],assertequ:16,assertfals:16,assertgreat:16,asserti:16,assertin:16,assertisinst:16,assertisnon:16,assertrais:16,asserttru:16,assimil:17,associ:16,asstr:11,assum:[8,10],at_z:8,attempt:5,attr:[0,1],attr_pascal_cas:0,attribut:[0,2,3,5,7,8,9,11,12],attributeerror:[0,1,2,3,7],author:16,auto:7,autocomplet:7,autodesk:[3,5,8,9,11,13,16],automat:[0,7,11,17],avail:7,averag:2,avoid:5,awai:13,axi:2,axist:2,back:[0,7,17],base:[1,2,3,5,6,8,9,11,12,13,15,16,17,18],basefilt:3,basenam:7,baseobject:[0,1,2,3,13,15],baseobjectwrapp:[0,1,3,5,8,11,15,17,18],basic:[5,16],batch:9,becaus:[0,5],been:[3,5,9,16],befor:[7,17],begin:[3,16],behavi:3,being:[0,13],below:[4,5,9,16],besid:13,best:5,better:5,bicategori:1,bicenum:[1,3,5,18],bip2:16,bip:[5,16],bip_enum:16,biparamet:1,bipenum:[1,3,5,11,12,16],bla:16,blaa:16,blank_str:11,blend:7,blog:3,bool:[2,3,5,7,11,15,17],bool_valu:3,bound:[5,16],boundingboxcontainspointfilt:3,boundingboxintersectsfilt:3,boundingboxisinsidefilt:3,box:[7,15],bug:[5,10],build:[3,7,13],builinparamet:11,built:[1,3,5,11,16],builtin:[3,5,9,11,12,16,18],builtin_enum:11,builtin_id:11,builtin_nam:11,builtin_paramet:11,builtincategori:[1,3,5,16,18],builtincollectortest:16,builtinparamet:[1,3,11,16],buitin:5,buitinparamet:1,button:[7,16],button_text:7,call:[0,5,7,9,15],caller:7,came:7,can:[0,3,4,5,7,9,11,13],cancel:16,cannot:5,caret:7,caret_index:7,caretindex:7,case_sensit:[3,10],cast:[1,6,9,11,18],cateagory_refer:18,categori:[1,3,9,16,18],category_id:1,category_nam:1,category_refer:[3,18],categoryfilt:3,categoryid:18,caus:0,center:15,centerscreen:7,chain:3,chang:9,charg:16,check:[2,5,7,11,13],checkbox1:7,checkbox:[7,16],checkbox_text:7,checkout:4,child:[0,5],children:7,chose:5,claim:16,class_:3,class_nam:[0,5],class_refer:[3,18],classfilt:3,classmethod:[3,5,16],clean:7,clear:[2,7,15,16],click:[7,16],clone:14,close:[7,16],clr:[7,9,13],cls:[3,5,16],cmd:7,co_filenam:7,co_firstlineno:7,co_nam:7,code:[0,1,4,5,7,9,13],coerc:[0,2,3,6,15,16,18],coerce_param_refer:3,coercetest:16,col:[10,16],collect:[3,5,7,9,15,16],collector:[4,5,16],collector_doc:3,collector_help:16,collectortest:16,column:7,columndefinit:7,com:[3,5,7,9,15,16],combin:3,combo:16,combobox1:7,combobox:[7,16],comment:[9,11,16,17],commit:[9,16,17],common:[9,13],commonli:5,comparison:[10,11,13],compat:[5,7,16],compens:5,complet:17,complex:9,compon:[7,16,18],component_valu:7,condit:[3,16],condition_nam:3,condition_valu:3,conflict:7,connect:16,consist:[0,5,9],consit:5,consol:5,consola:7,constraint:16,constructor:[3,5,11],contain:[2,3,16],content:7,context:[7,11,16,17],continu:3,contract:16,control_typ:7,conveni:[4,9],convent:9,convert:[0,3,9,11,18],coordin:8,copi:[5,16],copyright:16,correct:[0,2],correspond:5,could:[1,5,6,10,11,13],count:[2,3,7,9,11,15],crash:0,creat:[0,1,3,5,7,9,11,13,15,16],createbeginswithrul:[3,10],createcontainsrul:3,createendswithrul:3,createequalsrul:[3,9],creategreaterorequalrul:3,creategreaterrul:3,createlessorequalrul:3,createlessrul:3,createrul:3,critic:9,cross:15,current:7,currentdbdocu:[9,13],currentfram:7,currentuiappl:[9,13],cursor:7,cursor_line_index:7,curtain:5,curvedrivenfilt:3,curveelementfilt:3,custom:[3,6,7],d001:15,d552f44b:15,damag:16,data:[0,2,3,5,8,9,11,12,15,16],datum_text:16,deal:16,debug:[3,7,16],decend:5,decor:17,def:[0,1,2,3,5,6,7,8,11,12,13,15,16,17,18],defaultdict:7,defin:[0,3,5,7],defined_wrapper_class:5,definit:11,delet:[5,9,13,16],delete_all_wal:16,depend:3,deploi:7,deploybutton:7,deploywindow:7,deprac:5,descript:[7,16],design:3,desk:[3,5,9,11,16],desk_typ:16,dialogresult:7,dict:[3,7,8],dictioary_to_str:18,dictionari:[7,8,11,18],dictionary_to_str:18,did:5,differ:[5,9,13,16],dir:[0,1,3,5,7],direct:[13,15],directli:9,directori:[7,14],dirnam:16,discov:3,discoveri:3,disimilarti:5,displai:7,displayin:7,distribut:[4,16],dll:[7,9],doc:[1,2,3,5,9,10,12,13,15,16,17,18],document:[0,1,2,3,5,9,12,13,15,16,17,18],documentmanag:[9,13],doe:[0,5,7],doesnt:2,dosometh:17,dotnet:[1,2,3,7,13,15,16,18],doubl:11,down:7,download:4,draw:7,dropdown:7,due:[5,7],duplic:5,dyn:4,dynamo:[0,2,7,9,13,16,17],dynamotransact:17,e_ref:18,each:[3,13],easi:9,easier:3,easili:4,easilli:0,edg:15,effect:10,effort:9,ehsan:15,eid:[2,9,16],either:10,elemendid:[3,11],element1:3,element2:3,element:[0,2,3,6,7,10,11,12,15,16,17,18],element_class_nam:5,element_id:[2,3,5,15,16,18],element_or_id:2,element_refer:[2,18],element_set:2,elementcategoryfilt:3,elementclassfilt:3,elementdesignoptionfilt:3,elementfilt:3,elementid:[1,2,3,5,9,11,12,13,15,16,18],elementintersectsfilt:3,elementiscurvedrivenfilt:3,elementiselementtypefilt:3,elementlevelfilt:3,elementmulticategoryfilt:3,elementmulticlassfilt:3,elementownerviewfilt:3,elementparameterfilt:[3,9,10],elementphasestatusfilt:3,elements_or_id:[2,15],elementset:15,elementstructuraltypefilt:3,elementtest:16,elementworksetfilt:3,elemnet:7,elev:8,elif:[3,8,11,18],els:[0,2,3,5,7,8,9,11,15,17,18],empti:[3,15],enabl:7,enclos:15,end:[3,13,16],endpoint:15,endswith:3,enforc:3,enforce_typ:[0,1,5],engin:7,ensur:[0,5,7,16,17,18],ensureintransact:[9,17],enter:7,entered_lin:7,enumer:[1,3,5,7,11],environ:7,equal:[3,5,11,16],equival:5,errmsg:[7,13,17],error:[1,6,7,17],etc:[2,7],eval:7,evalu:[3,7],even:18,event:[7,16],everyth:[4,16],exact:[5,7],exampl:[0,3,4,9,16],except:[0,1,2,3,5,7,8,9,11,13,15,16,17,18],exception_valu:17,exclud:3,excluded_el:3,exclusionfilt:3,exe:7,exec:[7,13],execut:16,exist:[0,5],exit:[7,16],exit_on_clos:[7,16],exp:1,expect:[0,6,9,10],express:[7,16],extend:5,extens:7,extensiblestorag:3,extensiblestoragefilt:3,extra:4,f_back:7,f_code:7,f_global:7,f_local:7,face:[12,15],facilit:3,factori:[3,5,16],fail:[5,7,16,17],failur:16,fals:[0,1,2,3,5,7,9,15,16,17],famili:[3,9,16],family_id:[3,5],family_load:16,family_nam:18,family_refer:3,familycategori:5,familyinst:[3,5,9,16],familyinstac:9,familyinstancefilt:3,familynam:18,familystructuralmaterialtypefilt:3,familysymbol:[5,9,16],familysymbolfilt:3,featur:9,feed:3,few:[8,9,11],file:[4,13,16],filedialog:7,filenam:7,filepath:7,filter:[3,7,16],filter_class:3,filter_class_nam:3,filter_rul:[3,9,10],filter_valu:3,filter_value_rul:3,filterclass:3,filteredcollectorcomparetest:16,filteredel:3,filteredelementcollector:[3,9,10,16],filterinverserul:3,filterrul:3,find:[4,5,7,16],find_dynamo_uiapp:13,first:[0,2,3,5,7,9,11,16],first_symbol:16,firstel:15,fit:16,flag:[7,16],flat:11,flex:7,flexform:16,flexformtest:16,flexibl:[3,9],float_precis:3,focu:7,folderbrowserdialog:7,folderpath:7,follow:[9,11,16],fontfamili:7,fontsiz:7,forc:15,forceclosetransact:17,form:[5,13,16],form_result:16,format:[0,1,3,5,6,7,11,13,16,17,18],formselectfromlisttest:16,formtextinputtest:16,found:[1,3,5,6,11,13],frame:7,framework:7,free:16,fregion:16,from:[0,1,2,3,4,5,6,7,8,9,11,12,13,15,16,17,18],from_category_id:[1,5,18],from_el:3,from_element_and_paramet:[3,16],from_id:[5,16],from_int:[5,16],fromhandl:13,fullfram:7,fullnam:13,func:[3,5,7],funciton:[16,17],functool:17,furnish:16,furnitur:[1,9,16],fuzzi:18,fuzzy_get:[1,18],gener:5,geometryobject:12,get:[0,1,3,5,7,11,13,18],get_all_histori:7,get_available_filt:3,get_el:12,get_geometri:12,get_id:[1,3,5,16],get_last_entered_lin:7,get_last_lin:7,get_lin:7,get_paramet:11,get_sort:3,get_valu:7,getattr:[0,1,2,3,5,7,16,18],getcategori:1,getcurrentprocess:13,getel:[2,5,12,16,18],getelemend:9,getelementcount:3,getelementid:[9,15],getfamilysymbolid:5,getgeometryobjectfromrefer:12,getlinetext:7,getmemb:5,getmro:5,getnam:16,getsimilartyp:5,getstatu:16,gettempdir:7,getter:[0,11],gettypeid:5,getvalu:5,getwindow:7,github:[5,7,9,16],give:[0,9],given:5,global:[7,13,16],globalpoint:12,goo:5,got:[6,9],grant:16,greater:[3,9,11,16],greater_equ:3,grid:7,group:[3,17],gtalarico:[9,13,16],gui:16,h_align:7,hand:7,handi:9,handl:[1,2,7,9,11,12,13,15],handler:[7,9,13,15],happen:7,has:[0,5,7,9,10,17],hasattr:[0,2,7,18],hasend:16,hasstart:16,have:[3,4,16],head:7,height:[5,7,11,16],help:[1,2,4,8,9],helper:[5,7],here:[1,3,7,16],herebi:16,hidden:16,histori:[7,17],history_down:7,history_fil:7,history_index:7,history_it:7,history_up:7,hit:9,holder:16,home:7,horizontalalign:7,host:[7,13,15,17],how:[3,7,9,13,16],howev:13,htm:15,html:3,http:[3,5,7,9,15],id_:16,id_int:5,ids:[16,18],ignor:7,ignorecas:1,ilist:2,imag:4,implement:9,impli:16,importantli:5,includ:[4,7,10,16],increas:9,index:[2,3,7,9],indexerror:[2,3,5,7],infinetli:7,info:[3,7],inform:7,inherit:[0,5,7,11,12],inhert:5,init:7,initi:[7,9,13,15],inject:7,input:[3,7,9,16,18],insensit:10,inspect:[5,7],instal:[4,9],instanc:[2,3,8,9,11,13,16,17],instancetest:16,instanti:[0,1,3,5,13],instati:7,instead:[2,3,5,11,16],integ:[2,5,11,16],integervalu:[1,16],intend:16,interact:9,interfac:5,intern:[0,1,3,11],interpret:9,intersect:15,intiial:15,invalidelementid:[3,11,18],ipi:[5,7,13],ironlanguag:5,ironpython2:5,ironpython:[5,7,9,10,13],is_bound:5,is_curve_driven:3,is_load:7,is_not_typ:[3,5,16],is_plac:5,is_typ:[3,5,9,16],is_view_independ:[3,16],ischeck:7,isclass:5,iselectfilt:15,iselectionfilt:15,isinst:[0,3,5,7,8,11,16,18],isnottypefilt:3,isol:16,isreadonli:11,issu:[5,7],istypefilt:3,item:[7,11],item_or_iter:18,itemssourc:7,iter:[2,3,5,7,18],iteritem:[0,3,7,18],itertool:7,its:[1,3,9,13],join:[0,7,16,18],june:3,just:4,keep:0,kei:[2,3,7,18],keyboard:7,keyerror:[0,6],keypresspreview:7,keyup:7,keyword:[3,5],kind:[5,15,16],kwarg:[0,2,5,7,15,17],label:[7,16],label_text:7,lambda:[2,3],last:[3,7],last_lin:7,last_line_index:7,last_new_lin:7,launch:7,layout:7,leav:3,left:7,len:[2,3,7,8,11,15,16],length:[3,11],less:[3,9,11,16],less_equ:3,less_than:3,letter:16,level:[3,5,9,16],level_id:3,level_refer:3,levelfilt:3,levelnam:3,liabil:16,liabl:16,lib:13,librari:[4,7,9,13,16],light:8,like:8,limit:[3,16],line:7,linecount:7,link:[12,15],linkedel:15,linq:3,list:[0,2,3,5,7,8,9,11,15,16,18],littl:9,loadcompon:7,local:7,locat:[4,5,15],location_lin:11,log:7,logger:[0,3,5,6,7,11,12,13,15,16,17],loggerwrapp:16,logic:[3,13,15],logicalandfilt:3,logicalorfilt:3,longer:16,looksup:16,lookupparamet:[3,11,16],loop:7,loose_category_nam:1,lower:[0,1,7],main:[3,5],maingrid:7,maintain:0,mainwindowhandl:13,major:17,make:[0,5,9,17,18],make_wal:16,malform:3,manag:[2,4,9,11,17],mani:16,manual:[4,7],map:5,margin:7,markup:7,match:[5,11,15],math:5,max:[0,2,15],mayb:5,mean:7,mechan:3,member:[1,3,5,11],memori:3,menuitem:7,merchant:16,merg:[16,17],messag:[7,15],method:[0,1,2,3,5,7,8,9,15],method_nam:3,microsoft:7,midpoint:15,might:5,min:[2,15],miss:0,mission:9,misus:0,mit:9,mixin:[5,7],mock:13,mockobject:13,model:5,modifi:16,modul:[4,5,7,9,13],more:[3,5,7,9],most:[0,5],move:[15,16,17],mqdzwg:5,msdn:7,msg:[5,6,15],much:9,multipl:[3,7,12,15,16],multiselect:7,must:[0,3,5,7,11],name:[0,1,3,5,7,9,11,13,16,17,18],nameerror:13,namespac:[7,9,13],navig:5,nearest:15,need:[0,4,7,9,12,13],net40:7,net:[7,9],new_collector:3,new_level:16,new_obj:5,new_object:5,newlevel:16,newlin:7,next:7,node:4,noinspect:13,non:18,none:[0,2,3,5,6,7,11,13,15,16,17],noninfring:16,nores:7,normal:[7,9],not_:3,not_begin:[3,16],not_contain:3,not_end:3,not_equ:[3,16],not_great:3,not_greater_equ:3,not_less:[3,16],not_less_equ:3,not_level:3,note:[0,2,3,5,11,15],notic:16,notimpl:[3,13,15,17],notlevelfilt:3,now:15,number:[5,7],obj_typ:15,object:[0,2,3,5,7,8,9,13,15,17,18],objectsnaptyp:15,objecttyp:15,obtain:16,of_categori:[3,5,9,16],of_class:[3,5,9,16],ofcategori:[3,16],ofclass:[3,9,16],offic:5,offset:7,on_click:7,onc:[4,16],one:[3,5,8,18],onkeydownhandl:7,onkeyuphandl:7,onli:[0,3,4,5,11,12,15,16,18],open:[7,13],openandactivatedocu:16,openfiledialog:7,openxmlformat:7,opt:7,option:[2,3,7,9,15],or_filt:3,order:3,ordereddict:2,org:7,origin:[0,1,9],os_categori:16,ost_:1,ost_area:5,ost_filledregion:16,ost_furnitur:[1,16],ost_level:16,ost_room:[1,3,5,16],ost_stackedwal:16,ost_view:9,ost_wal:[3,5,16,18],other:[0,1,3,4,5,7,8,9,11,13,16],otherwis:[15,16],out:[7,16],output:7,over:[7,9],overid:3,overload:15,overrid:[0,3,5,7],overriden:[0,5],overview:9,own:[0,7,11],owner_view:3,packag:[4,9],page:9,pair:[9,18],panel_dir:16,param:[5,11,16],param_filt:5,param_id:[3,9,10],param_id_com:16,param_id_height:16,param_id_level_nam:16,param_id_loc:16,param_nam:[3,6,11,16],param_rul:3,param_valu:11,paramet:[0,1,2,3,5,6,7,8,9,10,15,16,17,18],parameter_filt:[3,5,16],parameter_id:3,parameter_nam:1,parameter_refer:3,parameter_typ:11,parameterd_does_not_exist:16,parameterfilt:[3,5,16],parameterfilterrulefactori:[3,9,10],parameterfiltertest:16,parametermap:11,parameterset:5,parametertyp:11,paramfilt:3,paramter_filt:9,parent:16,pars:7,particular:16,pascal:18,pass:[0,5,7,8,16,17,18],path:[4,7,9,13,14,16],pattern:9,per:3,perform:3,perhap:5,permiss:16,permit:16,perpendicular:15,persist:[9,13],person:16,pick:[7,12],pick_box:15,pick_by_rectangl:15,pick_edg:15,pick_el:[12,15],pick_fac:15,pick_linked_el:15,pick_pt:15,pick_pt_on_el:15,pick_styl:15,pickbox:15,pickboxstyl:15,pickelementsbyrectangl:15,picker:15,pickobject:15,pickpoint:15,pid:13,pin:0,place:[5,16],plan:0,platform:[7,9,13,16],plug:4,point:[2,8,15],point_collect:2,pointcollect:2,pointonel:15,pop:[2,3],portion:16,possibl:7,post:9,practic:4,pre:7,precis:3,prefer:3,preselect:[],present:7,presentationframework:7,pretti:[5,9],prev_comp:7,previewkeydown:7,previou:7,previous:7,primari:0,primarili:[0,11],primarydesignoptionmemberfilt:3,print:[5,7],prioriti:3,priority_group:3,process:[3,13],process_id:13,process_nam:13,process_valu:3,processnam:13,program:[7,13],programm:9,project:9,propag:7,proper:[0,3,15],properti:[0,2,3,5,7,8,11,12,13],provid:[0,2,5,7,9,11,15,16],pts:2,publish:16,purpos:16,pyrevit:[7,9,13,15],python:[4,6,7,11,13,14,16,17],python_typ:11,pyunresolvedrefer:13,quadrant:15,queri:3,question:9,quick:[3,7],quickfilt:3,rais:[0,1,2,3,5,7,8,11,13,15,17,18],ran:7,rang:7,read:[0,7,11],readthedoc:16,reason:5,recurs:[0,3,7],reduc:[3,9],ref:[12,15],refer:[0,1,2,5,9,11,13,15,18],referenc:15,regist:7,regular:1,relat:[2,5],remain:18,remov:[2,9],rentabl:5,repetit:9,repl:7,replac:[1,7,13],report:6,repositori:14,repr:[0,2,7],repres:[5,8],represent:0,reproduc:10,request:[7,9],requir:[3,5,7],reset:16,reset_caret:7,resizemod:7,resourc:7,respons:0,restor:7,restore_directori:7,restoredirectori:7,restrict:16,result:[3,5,10],retriev:[5,11],retun:5,return_valu:17,reus:9,revers:3,revit:[0,1,2,3,4,5,6,7,8,11,12,14,15,16,17,18],revit_object:[0,5],revit_object_nam:0,revit_object_name_chunk:0,revitapi:[9,10,13],revitapidoc:15,revitapiui:[9,13],revitpythonshel:[7,9,10,13],revitpythonwrapp:[4,7,9,14,16],revitservic:[9,13],revitvers:13,revitwallel:5,rfind:7,right:[13,15,16],roll:17,rollback:[9,17],rolledback:16,room:[5,9,16],room_nam:5,room_numb:5,roomfilt:3,roominst:5,roomtagfilt:3,roomtest:16,root:13,root_dir:16,row:7,rowdefinit:7,rpw:[0,1,2,3,4,5,6,7,8,11,12,13,15,16,17,18],rpw_baseobjectwrapp:0,rpw_element:16,rpw_famili:5,rpw_getfilepath:4,rpw_getstart:4,rpw_path:4,rpwcoerceerror:[1,3,6,8,16],rpwcontrolmixin:7,rpwexcept:[0,3,5,6,11,17],rpwparameternotfound:[5,6,11,16],rpwtypeerror:[0,3,5,6,11,15,18],rpwwrongstoragetyp:[5,6,11,16],rule:[3,9,10],rule_factory_nam:3,run:[7,17],rv2:16,rvt:[7,16],rwp:5,same:[3,5,9,10,11,18],sampl:[4,16],san:9,save:4,schema:7,scheme:5,scope:[3,16],screen:13,script:[7,9],script_dir:16,search:[1,3,14],second_symbol:16,see:[4,7,15],seem:15,select:[2,3,11,16],select_fil:7,select_fold:7,selectableinviewfilt:3,selected_el:9,selected_item:9,selecteditem:7,selectedpath:7,selectfromlist:[9,16],selection2:16,selection_id:9,selectionfilt:15,selectiontest:16,selet:15,self:[0,1,2,3,4,5,6,7,8,11,12,13,15,16,17],sell:16,sender:7,sensit:[3,10,16],separ:[7,16],set:[0,2,3,5,7,9,11,13,15,16,18],set_attr:7,set_some_paramet:17,setattr:7,setelementid:15,setter:[0,5,7,8,11,13],setup:[7,16],setupclass:16,setupmodul:16,sever:[7,9],shall:16,shell:9,ship:4,shorcut:11,shortcut:[7,9],should:[1,3,4,5,7,9,16],shouldnt:3,show:[0,2,7,9,15,16],showdialog:7,shown:5,sibl:[5,16],similar:[1,2,3,17],simpl:7,simplifi:17,sinc:[2,5],singl:[2,13,15,18],sizetocont:7,skip:13,slow:3,slowfilt:3,snake:[0,18],snake_str:18,snap:15,snapstodevicepixel:7,softwar:16,solut:5,some:[1,5,7,9,11],some_built_in_nam:11,some_level:3,some_point:8,some_str:9,somearea:5,someel:[2,5,15],someelementid:[5,9,10,13,15],somefamilyinst:[5,9],somefunct:16,somelinkeddoc:3,someobject:0,somerevitel:9,someroom:5,somesymbol:[3,5],someth:[7,11,17],sometyp:3,someview:3,somewallinst:5,somewallsymbol:5,sort:[2,3,7],sorted_bi:2,sorted_point:2,spacefilt:3,spacetagfilt:3,spatial_el:5,spatialel:16,special:9,specifi:[5,7],speed:9,sphinx:13,sphinx_compat:13,split:[0,7,18],squash:17,stack:[5,7,16],stack_cal:7,stack_cod:7,stack_filenam:7,stack_fram:7,stack_glob:7,stack_info:7,stack_level:7,stack_lineno:7,stack_loc:7,stackedwal:16,standard:[7,9,13],start:[7,9,16,17],startswith:7,state:7,staticmethod:[3,5,7,16,17],statu:17,still:7,stop:7,storag:[6,11],storage_typ:[6,11],storage_type_nam:11,storagetyp:11,store:[0,2,13],str:[1,2,3,5,7,11,13,15,16,17,18],stretch:7,string:[3,7,9,10,11,16,18],stringread:7,structur:3,structuralinstanceusagefilt:3,structuralmaterialtypefilt:3,structuralwallusagefilt:3,stuff:17,style:[7,15],subject:16,sublicens:16,substanti:16,sug:7,suggest:7,sum:2,superquickfilt:3,superslowfilt:3,support:5,sure:[0,4],symbol:[3,9,16],symbol_famili:5,symbol_family_name_param:5,symbol_id:3,symbol_inst:5,symbol_name_param:5,symbol_refer:3,symbols_id:5,syntaxerror:7,sys:[4,7,9,13,16],system:[7,13],systemexit:16,tab:7,take:11,talarico:16,tangent:15,target_typ:6,targettyp:7,task:[9,17],taskdialog:[13,16],tbox:7,teardown:16,teardownclass:16,teardownmodul:16,tempdir:7,tempfil:7,test:[1,2,3,7,9,10],test_built_in_parameter_exception_rais:16,test_cancel:16,test_categori:16,test_category2:16,test_class:16,test_close_exit:16,test_collector_cast:16,test_collector_chained_cal:16,test_collector_el:16,test_collector_elements_view_el:16,test_collector_elements_view_element_anoth:16,test_collector_elements_view_id:16,test_collector_first:16,test_collector_is_el:16,test_collector_is_element_fals:16,test_collector_is_element_typ:16,test_collector_is_element_type_fals:16,test_collector_is_view_depend:16,test_collector_len:16,test_collector_scope_el:16,test_collector_scope_element_id:16,test_collector_symbol_filt:16,test_corce_element_ref_id:16,test_corce_element_ref_int:16,test_corce_into_id:16,test_corce_to_element_divers:16,test_db:16,test_dir:16,test_doc:16,test_element_collector_area:16,test_element_collector_areaschem:16,test_element_collector_room:16,test_element_collector_wal:16,test_element_collector_wallsymbol:16,test_element_factory_class:16,test_element_from_id:16,test_element_from_int:16,test_element_get_builtin_parameter_by_strin:16,test_element_get_builtin_parameter_cast:16,test_element_get_paramet:16,test_element_get_parameter_nam:16,test_element_get_parameter_typ:16,test_element_id:16,test_element_repr:16,test_element_set_get_builtin_parameter_by_strin:16,test_flex_form:16,test_flex_form_launch:16,test_from_parameter_nam:16,test_get_dict_valu:16,test_get_valu:16,test_instance_categori:16,test_instance_famili:16,test_instance_symbol:16,test_instance_wrap:16,test_logg:16,test_param_comments_begin:16,test_param_comments_equ:16,test_param_comments_equal_cas:16,test_param_comments_not_begin:16,test_param_comments_not_equ:16,test_param_filter_float_equ:16,test_param_filter_float_great:16,test_param_filter_float_less_no:16,test_param_filter_float_less_y:16,test_param_filter_float_multi_filt:16,test_param_filter_float_not_equ:16,test_param_filter_int_equ:16,test_param_filter_int_less:16,test_parameter_does_not_exist:16,test_selection_add:16,test_selection_boolean:16,test_selection_boolean_fals:16,test_selection_by_index:16,test_selection_clear:16,test_selection_contain:16,test_selection_el:16,test_selection_element_id:16,test_selection_length:16,test_selection_upd:16,test_selection_updates_does_not_los:16,test_to_category_stacked_wal:16,test_to_category_wal:16,test_to_class_view:16,test_to_class_wal:16,test_to_iter:16,test_to_iterable_el:16,test_to_iterable_element_id:16,test_transaction_commit_status_rollback:16,test_transaction_commit_status_success:16,test_transaction_decor:16,test_transaction_get_nam:16,test_transaction_group:16,test_transaction_has_end:16,test_transaction_inst:16,test_transaction_start:16,test_ui:16,test_uidoc:16,test_util:16,test_wall_factori:16,test_wall_instance_categori:16,test_wall_instance_famili:16,test_wall_instance_symbol:16,test_wall_instance_wrap:16,testcas:16,tests_collect_room:16,tests_element_set_get_parameter_coerce_int:16,tests_element_set_get_parameter_coerce_str:16,tests_element_set_get_parameter_element_id:16,tests_element_set_get_parameter_float:16,tests_element_set_get_parameter_str:16,tests_param_class:16,tests_param_id_coerc:16,tests_param_name_contain:16,tests_param_name_end:16,tests_wrong_storage_typ:16,text:[7,16],textbox1:7,textbox:[7,16],textinput:16,textwrap:7,than:11,thebuildingcod:3,them:9,thi:[0,3,5,7,9,10,11,13,15,16,18],thick:7,through:[0,4,5,9],throughout:0,titl:[7,9,16,18],to_categori:[3,16,18],to_class:[3,16,18],to_el:[2,9,15,16,18],to_element_id:[2,3,9,15,16,18],to_iter:[15,16,18],to_pascal_cas:[0,18],to_str:[0,8],todo:[0,1,2,5,7,11,12,15,16,17],toelement:[9,16],toelementid:3,toobject:1,top:[7,16],top_offset:7,topmost:7,tort:16,tostr:[0,2,5,11],traceback:17,track:7,tracker:3,transacationgroup:17,transact:[11,13,16],transaction_group:17,transactiongroup:[16,17],transactionmanag:[9,13,17],transactionstatu:[16,17],transactionstest:16,transactiontaskdon:[9,17],treat:11,tree:5,tupl:[0,8],twice:16,twitter:9,type:[0,1,2,3,5,6,7,8,9,11,13,15,16,18],type_expect:6,type_nam:3,type_receiv:6,typeerror:6,typepad:3,typic:[3,4,9],uiapp:[9,13],uiapplic:[13,16],uidoc:[9,13,15,16],uidocu:3,unchang:18,unconnect:[11,16],unecessari:3,unfortun:5,uniqu:2,unique_family_id:5,unittest:16,unknown:5,unless:0,unord:2,unpack:3,unwrap:[0,3,5,16],updat:[5,7,13,15,16],usag:[3,7,11],use:[0,5,7,9,11,13,16],used:[1,3,4,5,7,9,11,13,16],uselayoutround:7,user:[3,7,9],usernam:13,uses:[3,5,15],usf:5,using:[0,2,3,5,7,9,10,11],usless:15,util:[0,1,2,3,5,6,7,11,12,13,15,16,17],uvpoint:12,v_align:7,v_space:7,valid:[3,16],valu:[0,2,3,5,6,7,8,9,10,11,16,17,18],valueerror:6,variabl:[0,7,9,13],verbos:7,verifi:16,version:[9,13,16],versionbuild:13,versionnam:13,versionnumb:13,verticalalign:7,verticalscrollbarvis:7,view:[3,9,13,16],view_depend:16,view_hidden:16,view_id:3,view_refer:[3,13],viewindependentfilt:3,viewownerfilt:3,viewsheet:3,viewspecif:16,viewtyp:3,wai:[5,9],wall:[3,9,11,16,17,18],wall_categori:16,wall_collector:16,wall_famili:16,wall_id:16,wall_inst:5,wall_key_ref_param:16,wall_kind:5,wall_location_lin:[1,5,9,11],wall_symbol:[5,16],wall_typ:5,wall_type_id:5,wall_user_height_param:[11,16],wallcategori:[5,16],wallfamili:5,wallinst:5,wallkind:[5,16],walls_categori:16,walls_el:16,walls_element_typ:16,wallsymbol:[5,16],walltest:16,walltyp:[5,9,16],want:7,warn:[0,3,5,13],warranti:16,well:[5,7,14,16],were:1,what:13,when:[0,5,7,13,17],where:[0,3,7,16],whereelementiselementtyp:[3,16],whereelementisnotelementtyp:[3,16],whereelementisviewindepend:3,wherefilt:3,wherepass:[3,9,10],whether:[5,16],which:[0,7],whom:16,width:7,widthandheight:7,window:[7,9,13],windowsbas:7,windowst:7,windowstartuploc:7,winfx:7,within:[4,7,17],without:[9,16],witout:5,wood:7,word:13,work:[0,5,7,9,14,16,17],workplanegrid:15,would:[0,4,5,10],wpf:[7,9],wpf_param:7,wpfapplication1:7,wrap:[0,2,3,5,7,8,11,12,15,16,17],wrapped_el:[2,3,5,9,11],wrapped_f:17,wrapped_param:16,wrapped_room:5,wrapped_view:16,wrapped_wal:16,wrappedwal:0,wrapper:[1,3,4,6,7,8,11,12,13,14,16,17],wrapper_class:5,write:[2,7,9],write_lin:7,write_text:7,wrong:6,www:[9,15],x86:[7,13],x_avg:2,x_max:2,x_min:2,x_valu:2,x_y_z:2,xaml:7,xmln:7,xyz:[0,2,8,12,15],xyz_or_tupl:8,y_avg:2,y_max:2,y_min:2,y_valu:2,year:13,yield:[2,3],you:[0,4,7,9,11,13],your:[0,3,4,7,9,13],z_avg:2,z_max:2,z_min:2,z_valu:2},titles:["Base Wrapper","BuiltIns","Collections","Collector","Dynamo","Element Wrappers","Exceptions","Forms","Geometry","Revit Python Wrapper","Known Issues","Parameters","Reference","Revit","RevitPythonShell","Selection","Tests","Transaction","Utilities"],titleterms:{For:9,Using:9,alert:7,api:9,base:0,basic:9,benefit:9,builtin:1,categori:5,collect:2,collector:[3,9],compat:9,compon:9,consol:7,contribut:9,control:7,dialog:7,dynamo:4,element:[5,9],elementcollect:2,elementset:2,except:6,famili:5,file:7,flexform:7,folder:7,form:[7,9],geometri:8,implement:[0,1,2,3,5,6,7,8,11,12,13,15,17,18],instanc:5,issu:10,known:10,licens:9,method:13,paramet:11,parameterfilt:9,parameterset:11,pick:15,python:9,quickform:7,refer:12,revit:[9,13],revitpythonshel:14,rpw:9,select:[7,9,15],selectfromlist:7,spatial:5,suit:16,symbol:5,taskdialog:7,test:16,textinput:7,transact:[9,17],typic:13,util:[9,18],wall:5,wrapper:[0,5,9,15],xyzcollect:2}})