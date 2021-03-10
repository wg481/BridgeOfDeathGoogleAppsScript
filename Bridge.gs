function myFunction() {
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Bridge of Death', 'What... is your name?', ui.ButtonSet.YES_NO);
  if (response.getSelectedButton() == ui.Button.YES) {
    Logger.log('The Knight\'s name is %s.', response.getResponseText());
  }   else if (response.getSelectedButton() == ui.Button.NO) {
    Logger.log('The Knight didn\'t want to provide a name.');
  }   else {
    Logger.log('The Knight closed the dialog bar. Sadly we could\'nt record a response.');
  }
  var ui2 = DocumentApp.getUi();
  var response2 = ui2.prompt('Bridge of Death', 'What... is your quest?', ui2.ButtonSet.YES_NO);
  var finalAlert = DocumentApp.getUi();
  if (response2.getSelectedButton() == ui.Button.YES) {
    Logger.log('The Knight\'s quest is %s.', response2.getResponseText());
  }   else if (response2.getSelectedButton() == ui.Button.NO) {
        Logger.log('The Knight refused to provide quest information.');
  }   else {
        Logger.log('The Knight closed the dialogue. No information could be provided.');
  } 

  var uiToo = DocumentApp.getUi();
  var response3 = uiToo.prompt('Bridge of death', 'What... is the airspeed velocity of an unladen swallow?', uiToo.ButtonSet.YES_NO);
  var urAnswer = response3.getResponseText();
  var holyGrail = "What do you mean? An African or European swallow?";
  if (urAnswer == holyGrail) {
    finalAlert.alert('Bridge of Death', 'Huh? I-- I don\'t know that. Auuuugh!', finalAlert.ButtonSet.OK);
    finalAlert.alert('Bridge of Death', 'You and your brave knights were able to pass through the Bridge of Death, and continue seeking the Holy Grail.', finalAlert.ButtonSet.OK);
  }
    else if (urAnswer != holyGrail) {
      finalAlert.alert('Bridge of Death', 'You were thrown into the Gorge of Eternal Peril.', finalAlert.ButtonSet.OK);
    } 
    else {
      finalAlert.alert('Bridge of Death', 'The knight was a wimp like Sir Robin. When danger reared its ugly head he turned his tail and then he fled.', finalAlert.ButtonSet.OK);
    }
  
}