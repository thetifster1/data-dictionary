
/**
 * Office Schema
 */

var Phone = String
var Url = String

module.exports = {
  OfficeKey: {type:String, primary:true, core:true},
  OriginatingSystemOfficeKey: {type:String, core:true},
  OriginatingSystemName: {type:String},
  OfficeMlsId: {type:String, core:true},
  OfficeName: {type:String, core:true},
  OfficePhone: {type:String, core:true},
  OfficePhoneExt: {type:Number, core:true},
  OfficeFax: {type:String},
  OfficeEmail: {type:String, core:true},
  OfficeType: {type:String},
  OfficeBranchType: {type:String},
  SocialMediaType: {type:String},
  SocialMediaUrlOrId: {type:String},
  OfficeAOR: {type:String},
  OfficeAORMlsId: {type:String},
  OfficeAORkey: {type:String},
  OfficeNrdsId: {type:String, core:true},
  OfficeCorporateLicense: {type:String},
  OfficeBrokerMlsId: {type:String, core:true},
  OfficeBrokerKey: {type:String, core:true},
  OfficeManagerMlsId: {type:String},
  OfficeManagerKey: {type:String},
  OfficeAddress1: {type:String, core:true},
  OfficeAddress2: {type:String, core:true},
  OfficeCity: {type:String, core:true},
  OfficeStateOrProvince: {type:String, core:true},
  OfficePostalCode: {type:String, core:true},
  OfficePostalCodePlus4: {type:String, core:true},
  OfficeCountyOrParish: {type:String, core:true},
  OfficeStatus: {type:String, core:true},
  OfficeAssociationComments: {type:String},
  TimestampEntered: {type:Date, core:true},
  TimestampLastLoggedIn: {type:Date},
  TimestampModified: {type:Date, core:true},
  MainOfficeKey: {type:String, core:true},
  MainOfficeMlsId: {type:String, core:true},
  FranchiseAffiliation: {type:String},
  IDXOfficeParticipationYN: {type:Boolean}
};
