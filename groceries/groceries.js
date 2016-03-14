// Your Code Here!

var addItem = function(name){
  if(!name) {
    return;
  }
  var newItem = $('<div>');
  newItem.addClass('item');
  newItem.addClass('list-group-item');
  var deleteBtn = $('<span>');
  deleteBtn.text('Delete');
  deleteBtn.addClass('');
  deleteBtn.addClass('btn btn-danger');
  newItem.text(name + "  ");
  newItem.append(deleteBtn);
  deleteBtn.click(function() {
    newItem.fadeOut();
  })
  $('#list').append(newItem);
}

$(document).ready(function(){
  $('#new-item').submit(function(e){
    var name = $('#item-name').val();
    $('#item-name').val("");
    addItem(name);
    e.preventDefault();
  })
});
