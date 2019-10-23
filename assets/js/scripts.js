/*
*   Delete Confirmations
*/
var deleteButtons = document.getElementsByClassName('delete-button');
if (deleteButtons.length > 0) {
    for (let el of deleteButtons) {
        el.addEventListener('click', deleteConfirm);
    }
}
function deleteConfirm(event) {
    confirm('Are you sure you want to delete this?');
}