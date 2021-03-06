$(document).ready(function() {
  /* global moment */
  // lostContainer holds all of our posts
  var lostContainer = $(".lost-container");
  var userlosts;

  // This function grabs the lost posts from the database and updates the view
  function getPosts() {
    $.get("./api/userlosts", function(data) {
      console.log("Lost", data);
      userlosts = data.reverse();
      if (!userlosts || !userlosts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // Getting the initial list of posts
  getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // lostContainer
  function initializeRows() {
    lostContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < userlosts.length; i++) {
      postsToAdd.push(createNewRow(userlosts[i]));
    }
    lostContainer.append(postsToAdd);
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
      "margin-top":
      "-15px"
    });

    var newPostPanelBody = $("<div>");
    newPostPanelBody.addClass("panel-body");
    newPostTitle.text(post.petName + " ");

    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm A");
    newPostDate.text(formattedDate);

    var newAnimalType = $("<p>");
    newAnimalType.text("Type: " + post.typeLost);

    var newLostAddress = $("<p>");
      if(post.lostAddress && post.lostAddress != '') {
        newLostAddress.text("Address Last Seen: " + post.addressLost);
      } else {
        newLostAddress.text("")
      };

    var newLostDate = $("<p>");
    newLostDate.text("Date Lost: " + post.dateLost);

    // var newLostGender = $("<p>");
    // newLostGender.text("Gender: " + post.genderLost);
    var newLostGender = $("<p>");
      if (post.genderLost && post.genderLost != '') {
        newLostGender.text("Gender: " + post.genderLost);
      } else {
        newLostGender.text("Gender: Unknown");
      }

      var newLostComment = $("<p>");
        if(post.commentLost && post.commentLost != '') {
          newLostComment.text("Additional Info: " + post.commentLost);
        } else {
          newLostComment.text("")
        };

    var newLostName = $("<p>");
    newLostName.text("Contact Name: " + post.nameLost);

    var newLostEmail = $("<p>");
    newLostEmail.text("Email: " + post.emailLost);

    // var newLostPhone = $("<p>");
    // newLostPhone.text("Phone: " + post.phoneLost);

    var newLostPic = $("<img>").attr({
      src: post.photoLost,
      // alt: "photo",
      height: "300"
    });
    newPostTitle.append(newPostDate);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelBody.append(newAnimalType);
    newPostPanelBody.append(newLostAddress);
    newPostPanelBody.append(newLostDate);
    newPostPanelBody.append(newLostGender);
    newPostPanelBody.append(newLostComment);
    newPostPanelBody.append(newLostName);
    newPostPanelBody.append(newLostEmail);
    // newPostPanelBody.append(newLostPhone);
    newPostPanelBody.append(newLostPic);

    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("post", post);
    return newPostPanel;
  }

  // This function displays a message when there are no posts
  // function displayEmpty() {
  //   lostContainer.empty();
  //   var messageh2 = $("<h2>");
  //   messageh2.css({ "text-align": "center", "margin-top": "50px" });
  //   messageh2.html("No posts yet,");
  //   lostContainer.append(messageh2);
  // }

});
