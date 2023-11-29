export function NotificationsData() {
  const notifications = [
    {
      id: 1,
      type: "like",
      userId: 5,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001845/cld-sample-4.jpg",
      username: "safakkocaoglu",
      status: "boring boring boring..",
    },
    {
      id: 2,
      type: "like",
      userId: 6,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001838/samples/outdoor-woman.jpg",
      username: "janellshrum",
      status: "how's the wheater out there?",
    },
    {
      id: 3,
      type: "like",
      userId: 9,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001836/samples/shoe.jpg",
      username: "alexdurden",
      status: "boring boring boring..",
    },
    {
      id: 4,
      type: "like",
      userId: 9,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001823/samples/landscapes/nature-mountains.jpg",
      username: "dorahawks",
      status: "boring boring boring..",
    },
    {
      id: 5,
      type: "like",
      userId: 8,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001820/samples/ecommerce/accessories-bag.jpg",
      username: "thomasholden",
      status: "boring boring boring..",
    },
    {
      id: 6,
      type: "like",
      userId: 7,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001821/samples/food/spices.jpg",
      username: "shirleybeauchamp",
      status: "boring boring boring..",
    },
    {
      id: 7,
      type: "like",
      userId: 1,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001837/samples/balloons.jpg",
      username: "travisbennett",
      status: "boring boring boring..",
    },
    {
      id: 8,
      type: "like",
      userId: 2,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001835/samples/two-ladies.jpg",
      username: "Kristen Thomas",
      status: "boring boring boring..",
    },
    {
      id: 9,
      type: "like",
      userId: 3,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001842/samples/woman-on-a-football-field.jpg",
      username: "garyduty",
      status: "boring boring boring..",
    },
    {
      id: 10,
      type: "like",
      userId: 4,
      userImage:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      postImageUrl:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001844/cld-sample-3.jpg",
      username: "safakkocaoglu",
      status: "boring boring boring..",
    },
  ];
  return notifications;
}
export function Posts() {
  const posts = [
    {
      id: 1,
      userId: 2,
      desc: "Love For All, Hatred For None.",
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001845/cld-sample-4.jpg",
      date: "5 mins ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
        { id: 3, tagname: "exersize" },
      ],
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      userId: 1,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001838/samples/outdoor-woman.jpg",
      date: "15 mins ago",
      tags: [
        { id: 1, tagname: "food" },
        ,
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      userId: 4,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001836/samples/shoe.jpg",
      desc: "assets/post/3.jpeg",
      date: "1 hour ago",
      tags: [
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      userId: 3,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001823/samples/landscapes/nature-mountains.jpg",
      date: "4 hours ago",
      tags: [{ id: 5, tagname: "love" }],
      like: 7,
      comment: 3,
    },
    {
      id: 5,
      userId: 6,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001820/samples/ecommerce/accessories-bag.jpg",
      date: "5 hours ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
        { id: 3, tagname: "exersize" },
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 23,
      comment: 5,
    },
    {
      id: 6,
      userId: 7,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001821/samples/food/spices.jpg",
      date: "1 day ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
        { id: 3, tagname: "exersize" },
        { id: 5, tagname: "love" },
      ],
      like: 44,
      comment: 6,
    },
    {
      id: 7,
      userId: 5,
      desc: "Never regret anything that made you smile.",
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001837/samples/balloons.jpg",
      date: "2 days ago",
      tags: [{ id: 4, tagname: "fashion" }],
      like: 52,
      comment: 3,
    },
    {
      id: 8,
      userId: 10,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001835/samples/two-ladies.jpg",
      date: "3 days ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
        { id: 5, tagname: "love" },
      ],
      like: 15,
      comment: 1,
    },
    {
      id: 9,
      userId: 8,
      desc: "Change the world by being yourself.",
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001842/samples/woman-on-a-football-field.jpg",
      date: "5 days ago",
      tags: [
        { id: 2, tagname: "party" },
        { id: 3, tagname: "exersize" },
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 11,
      comment: 2,
    },
    {
      id: 10,
      userId: 1,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001844/cld-sample-3.jpg",
      date: "1 week ago",
      tags: [
        { id: 3, tagname: "exersize" },
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 104,
      comment: 12,
    },
    {
      id: 11,
      userId: 9,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001819/samples/landscapes/beach-boat.jpg",
      date: "1 week ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
        { id: 4, tagname: "fashion" },
        { id: 5, tagname: "love" },
      ],
      like: 104,
      comment: 12,
    },
    {
      id: 12,
      userId: 2,
      photo:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1698001841/samples/dessert-on-a-plate.jpg",
      date: "1 week ago",
      tags: [
        { id: 1, tagname: "food" },
        { id: 2, tagname: "party" },
      ],
      like: 104,
      comment: 12,
    },
  ];
  return posts;
}
export function Users() {
  const users = [
    {
      id: 1,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-on-a-street.jpg",
      username: "Safak Kocaoglu",
      name: "Safak",
      lastname: "Kocaoglu",
      status: "boring boring boring..",
    },
    {
      id: 2,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001840/samples/man-portrait.jpg",
      username: "Janell Shrum",
      name: "Janell",
      lastname: "Shrum",
      status: "how's the wheater out there?",
    },
    {
      id: 3,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1701091658/Screenshot_20230824_230811_Pinterest_qiwcnn.jpg",
      username: "Alex Durden",
      name: "Alex",
      lastname: "Shrum",
      status: "boring boring boring..",
    },
    {
      id: 4,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1701091657/Screenshot_20230824_000752_YouTube_w3l64d.jpg",
      username: "Dora Hawks",
      name: "Dora",
      lastname: "Hawks",
      status: "boring boring boring..",
    },
    {
      id: 5,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1701091655/Screenshot_20230824_230836_Pinterest_sim4hd.jpg",
      username: "Thomas Holden",
      name: "Thomas",
      lastname: "Holden",
      status: "boring boring boring..",
    },
    {
      id: 6,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001838/samples/look-up.jpg",
      username: "Shirley Beauchamp",
      name: "Shirley",
      lastname: "Beauchamp",
      status: "boring boring boring..",
    },
    {
      id: 7,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001837/samples/smile.jpg",
      username: "Travis Bennett",
      name: "Travis",
      lastname: "Bennett",
      status: "boring boring boring..",
    },
    {
      id: 8,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1698001812/samples/people/kitchen-bar.jpg",
      username: "Kristen Thomas",
      name: "Kristen",
      lastname: "Thomas",
      status: "boring boring boring..",
    },
    {
      id: 9,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1701091651/VideoCapture_20231009-161053_l3na7l.jpg",
      username: "Gary Duty",
      name: "Gary",
      lastname: "Duty",
      status: "boring boring boring..",
    },
    {
      id: 10,
      profilePicture:
        "https://res.cloudinary.com/dybq4rwuf/image/upload/v1701091486/20231119_190336_wfcsyv.jpg",
      username: "John Doe",
      name: "John ",
      lastname: "Doe",
      status: "boring boring boring..",
    },
  ];
  return users;
}
export function AccountUser() {
  const accountUser = {
    id: 0,
    username: "maryam._eb_",
    name: "maryam",
    lastName: "Ebrahimi",
    newPassword: "",
    email: "maryam@gmail.comm",
    password: "@Maryam1",
    profilePicture:
      "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=avif,webp&format=jpg&width=950",
    location: "New York, NY - Los Angeles, CA",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    phone: "09937705677",
    bio: "This is  my life",
    gender: "female",
  };
  return accountUser;
}
export function SideBarMenuItems() {
  const menuItems = [
    { title: "Home", id: 1, direction: "/" },
    { title: "Search", id: 2, direction: "/search" },
    { title: "Explore", id: 3, direction: "/explore" },
    { title: "Messages", id: 4, direction: "/messages" },
    { title: "Notifications", id: 5, direction: "/notifications" },
    { title: "Create", id: 6, direction: "" },
    { title: "Profile", id: 7, direction: "/profile/posts" },
    { title: "Dark/Light", id: 8, direction: null },
  ];
  return menuItems;
}
export function SideBarSubMenuItems() {
  const subMenuItems = [
    { title: "Settings", id: 1, direction: "/profile/settings" },
    { title: "Swith Account", id: 6, direction: "/create" },
    { title: "Log Out", id: 7, direction: "/login" },
  ];
  return subMenuItems;
}
export function SettingMenuItems() {
  const settingsMenuItems = [
    { title: "Profile", id: 1, direction: "profile" },
    { title: "Notifications", id: 2, direction: "notifications" },
    { title: "Privacy", id: 3, direction: "privacy" },
    { title: "Log Out", id: 4, direction: "/login" },
  ];
  return settingsMenuItems;
}
