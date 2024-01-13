$(function () {
  // Add-ons data
  const addOns = [
    {
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
    nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor
    sit amet.`,
      price: 100,
      period: 2,
    },
    {
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
    nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor
    sit amet.`,
      price: 100,
      period: 2,
    },
    {
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
    nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor
    sit amet.`,
      price: 100,
      period: 2,
    },
  ];
  const sellerServices = new Array(3);
  const services = new Array(4);
  let feedbacks = [
    {
      name: "Jane Smith",
      path: "/assets/seller/Subtract.svg",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.... Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Diam nisi, cras
  neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
  consectetur adipiscing elit....`,
    },
    {
      name: "Jane Smith",
      path: "/assets/seller/Subtract.svg",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.... Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Diam nisi, cras
  neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
  consectetur adipiscing elit....`,
    },
    {
      name: "Jane Smith",
      path: "/assets/seller/Subtract.svg",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.... Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Diam nisi, cras
  neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
  consectetur adipiscing elit....`,
    },
  ];

  // slider initialization
  new Splide(".splide").mount();

  // handle navbar height as space between body
  (function handleScrollMargin() {
    const navHeight = $("header").innerHeight();
    $("body").css("marginTop", navHeight + "px");
  })();
  // display sellers on my html
  function displaySellers() {
    let container = "";
    for (let i = 0; i < sellerServices.length; i++) {
      container += ` <div class="service">
      <div class="service-img">
        <img src="/assets/slide-img.png" alt="service-img" />
      </div>
      <div class="service-details-container">
        <p>
          Lorem ipsum dolor sit ame, consecteturLorem ipsum dolor...
        </p>
        <div class="service-details">
          <div>
            <i class="fa-solid fa-star"></i>
            <span>4.9 (50)</span>
            <img src="/assets/service/Tag.svg" alt="tag" />
            <span class="price">$10</span>
          </div>
        <label htmlFor="favorite">
        <i class="fa-regular fa-heart"></i>
          <input type="checkbox" name="favorite" id="favorite" /></label>
        </div>
      </div>
    </div>`;
    }
    $("#sellerServices").html(container);
  }
  // display services on my html
  function displayServices() {
    let container = "";
    for (let i = 0; i < services.length; i++) {
      container += ` <div class="service">
      <div class="service-like">
      <label htmlFor="service-like">
        <i class="fa-regular fa-heart"></i>
        <input type="checkbox" name="service-like" id="service-like" />
        </label>
      </div>
      <div class="service-img-container">
        <img src="/assets/slide-img.png" alt="service-img" />
      </div>
      <div class="card-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <div class="service-info">
          <i class="fa-solid fa-star"></i>
          <span>4.9</span>
          <img
            src="/assets/service/ShoppingCartSimple.svg"
            alt="shopping-cart"
          />
          <span>300</span>
        </div>
        <div class="service-owner-info">
          <div class="service-owner">
            <img
              src="/assets/seller/Subtract.svg"
              alt="service-owner"
            />
            <span>Jane Smith</span>
          </div>
          <div>
            <img src="/assets/service/Tag.svg" alt="tag" />
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>`;
    }
    $(".suggested-services .services").html(container);
  }
  // display feedback on my html
  function displayFeedbacks() {
    let container = "";
    for (let i = 0; i < feedbacks.length; i++) {
      container += `    <div class="feedback">
      <div class="profile-img">
        <img src=${feedbacks[i].path} alt="feedback" />
      </div>
      <div class="feedback-content">
        <h3>${feedbacks[i].name}</h3>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star gray"></i>
          <span>.</span>
          <span>30m</span>
        </div>
        <p>
         ${feedbacks[i].content}
        </p>
      </div>
    </div>`;
    }
    $(".feedbacks-of-customers").html(container);
  }
  // display addons on my html
  function displayAddonOptions() {
    let container = "";
    for (let i = 0; i < addOns.length; i++) {
      container += ` <div class="add-on-option" > <div class="add-on-content">
        <label for="add-on-check">
          <i class="fa-regular fa-circle" id="addOnIcon"></i>
          <input
            type="checkbox"
            name="add-on-check"
            id="addOnCheck"
            value= ${addOns[i].price}
          />
        </label>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor
          sit amet.
        </p>
      </div>
      <div class="add-on-info">
        <span>$${addOns[i].price}</span><span>${addOns[i].period} days</span>
      </div>  </div>`;
    }
    $("#addOnContainer").html(container);
  }
  // review input handling function
  function addReview() {
    let review = {
      name: "Ahmed Ali",
      path: $(".new-feedback img").attr("src"),
      content: $("#feedBackInput").val().trim(),
    };

    if (review.content) {
      feedbacks.push(review);
      displayFeedbacks();
    }
  }
  // handle checkboxes checking state
  function toggleAddonState($checkbox, $icon) {
    const isChecked = $checkbox.prop("checked");
    isChecked
      ? $(".section-header #selectAll").css("color", "rgb(122, 120, 121)")
      : $(".section-header #selectAll").css("color", "rgb(29, 191, 115)");

    $icon.toggleClass("fa-solid fa-circle-check", !isChecked);
    $icon.toggleClass("fa-regular fa-circle", isChecked);
    $checkbox.prop("checked", !isChecked);
  }
  // getting elements clicked
  function handleAddOnClick($label) {
    const $checkbox = $label.find("input[type='checkbox']");
    const $icon = $label.find(".fa-regular.fa-circle").length
      ? $label.find(".fa-regular.fa-circle")
      : $label.find(".fa-solid.fa-circle-check");
    return { $checkbox, $icon };
  }
  // handle like checkboxes checking state
  function toggleFavoriteState($checkbox, $icon) {
    const isChecked = $checkbox.prop("checked");
    $icon.toggleClass("fa-solid", !isChecked);
    $icon.toggleClass("fa-regular", isChecked);
    $checkbox.prop("checked", !isChecked);
  }
  // getting elements clicked
  function handleFavoriteClick($label) {
    const $checkbox = $label.find("input[type='checkbox']");
    const $icon = $label.find(".fa-regular").length
      ? $label.find(".fa-regular")
      : $label.find(".fa-solid");
    return { $checkbox, $icon };
  }
  // get Values of Addons to show it inside my HTML
  function getCheckedAddOnValues() {
    const checkedAddOnValues = [];
    $(".add-on-option input[type='checkbox']").each(function () {
      if ($(this).prop("checked")) {
        checkedAddOnValues.push($(this).val());
      }
    });
    const newArr = checkedAddOnValues.reduce((prev, next) => +prev + +next, 0);
    $(".cost").html(`$${newArr}`);
    return newArr;
  }
  // handle Count of Purchased items
  function handleCountOfAddons(rate) {
    let count = +$(".count").html() + rate;
    if (count < 0 || getCheckedAddOnValues() === 0) {
      count = 0;
    }
    let total = count * getCheckedAddOnValues();
    $(".count").html(count);
    $(".cost").html(`$${total}`);
  }
  displaySellers();
  displayFeedbacks();
  displayAddonOptions();
  displayServices();

  // Event listners

  $(document).on("click", ".add-on-option label", function () {
    const $label = $(this);
    const { $checkbox, $icon } = handleAddOnClick($label);
    toggleAddonState($checkbox, $icon);
    getCheckedAddOnValues();
  });
  $(document).on("click", ".section-header #selectAll", function () {
    const $label = $(".add-on-option label");
    const { $checkbox, $icon } = handleAddOnClick($label);
    toggleAddonState($checkbox, $icon);
    getCheckedAddOnValues();
  });
  $(document).on(
    "click",
    "#sellerServices label, #suggestedServices label , .socials label",
    function () {
      const $label = $(this);
      const { $checkbox, $icon } = handleFavoriteClick($label);
      toggleFavoriteState($checkbox, $icon);
    }
  );

  $(".review-btn").on("click", addReview);

  $(document).on("click", ".count-btn-minus , .count-btn-plus", function () {
    if ($(this).hasClass("count-btn-minus")) {
      handleCountOfAddons(-1);
    } else if ($(this).hasClass("count-btn-plus")) {
      handleCountOfAddons(1);
    }
  });
  $("#copyToClipBoard").on("click", async function () {
    const domain = window.location.origin;
    try {
      await navigator.clipboard.writeText(domain);
    } catch (error) {}
    $(".clipBoardMessaage").animate({ left: "2%" }, 1500);
    setTimeout(() => {
      $(".clipBoardMessaage").animate({ left: "-100%" }, 1500);
    }, 3000);
  });
  $(".feedback-input-container").on("click", function () {
    $("#feedBackInput").focus();
  });
  $("#profile-menu").hover(function () {
    $("#option-menu").fadeToggle(500);
  });
  $(document).on("click", ".open-menu, .close-menu", function () {
    if ($(this).hasClass("open-menu")) {
      $("nav").css({ right: "0" });
    } else if ($(this).hasClass("close-menu")) {
      $("nav").css({ right: "-200%" });
    }
  });
});
