$(document).ready(function() {
  /* global moment */
  // foundContainer holds all of our posts
    $("h2").css("background-color", "pink");
    var foundContainer = $(".found-container");
  var userfounds;

  // This function grabs the found posts from the database and updates the view
  function getPosts() {
    $.get("/api/userfounds", function(data) {
      console.log("Found", data);
    userfounds = data.reverse();
      if (!userfounds || !userfounds.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // Getting the initial list of posts
  getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside foundContainer
  function initializeRows() {
    foundContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < userfounds.length; i++) {
      postsToAdd.push(createNewRow(userfounds[i]));
    }
    foundContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
        var newPostPanel = $("<div>");
        newPostPanel.addClass("panel panel-default");
        var newPostPanelHeading = $("<div>");
        newPostPanelHeading.addClass("panel-heading");
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        newPostDate.css({
          float: "right",
          "font-weight": "700",
          "margin-top": "-15px"
        });

        var newPostPanelBody = $("<div>");
        newPostPanelBody.addClass("panel-body");

        newPostTitle.text(post.typeFound);

        var formattedDate = new Date(post.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm A");
        newPostDate.text(formattedDate);


        var newFoundAddress = $("<p>");
        newFoundAddress.text("Area Found: " + post.addressFound);

        var newFoundDate = $("<p>");
        newFoundDate.text("Date Found: " + post.dateFound);


        var newFoundGender = $("<p>");
          if (post.genderFound && post.genderFound != '') {
            newFoundGender.text("Gender: " + post.genderFound);
          } else {
            newFoundGender.text("Gender: Unknown");
          }

        var newFoundComment = $("<p>");
          if(post.commentFound && post.commentFound != '') {
            newFoundComment.text("Additional Info: " + post.commentFound);
          } else {
            newFoundComment.text("");
          }

        var newFoundName = $("<p>");
        newFoundName.text("Name: " + post.nameFound);

        var newFoundEmail = $("<p>");
        newFoundEmail.text("Email: " + post.emailFound);

        // var newFoundPhone = $("<p>");
        // newFoundPhone.text("Phone: " + post.phoneFound);

        var newFoundPic = $("<img>").attr({
          src: post.photoFound,
          // alt: "photo",
          height: "300",
        });
        newPostTitle.append(newPostDate);
        newPostPanelHeading.append(newPostTitle);
        newPostPanelBody.append(newFoundAddress);
        newPostPanelBody.append(newFoundDate);
        newPostPanelBody.append(newFoundGender);
        newPostPanelBody.append(newFoundComment);
        newPostPanelBody.append(newFoundName);
        newPostPanelBody.append(newFoundEmail);
        // newPostPanelBody.append(newFoundPhone);
        newPostPanelBody.append(newFoundPic);
        newPostPanel.append(newPostPanelHeading);
        newPostPanel.append(newPostPanelBody);
        newPostPanel.data("post", post);
        return newPostPanel;
  }
  //
  // // This function displays a message when there are no posts
  // function displayEmpty() {
  //   foundContainer.empty();
  //   var messageh2 = $("<h2>");
  //   messageh2.css({ "text-align": "center", "margin-top": "50px" });
  //   messageh2.html("No posts yet,");
  //   foundContainer.append(messageh2);
  // }
});
