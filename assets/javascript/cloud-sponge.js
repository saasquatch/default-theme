function handleImportedContacts(contacts, source, owner) {
    var emailList = document.getElementById('contact-list');
    emailList.oninput();
}

cloudsponge.init({
    skipSourceMenu: true,
    afterSubmitContacts: handleImportedContacts,
    sources : ["gmail", "yahoo", "windowslive"]
});
