function handleImportedContacts(contacts, source, owner) {
    var emailList = document.getElementById('contact-list');
    emailList.oninput();
}

cloudsponge.init({
    skipSourceMenu: true,
    afterSubmitContacts: handleImportedContacts,
    selectionLimit : 100,
    displaySelectAllNone : false,
    sources : ["gmail", "yahoo", "windowslive"]
});
