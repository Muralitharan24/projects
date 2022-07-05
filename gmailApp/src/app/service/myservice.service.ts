import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  isDisplay:boolean = false;
  ischecked:boolean = false;
  isShown:boolean = true;
  isempty:boolean = true;
  findEmpty:boolean = true;
  staredpara:boolean = true;
  menuArr:any = [
    {image:"url(https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png)",content:"Inbox"},
    {image:"url(https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png)",content:"Starred"},
    {image:"url(https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png)",content:"Drafts"},
    {image:"url(https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png)",content:"Trash"}
  ];

  buttonArr:any = [
    {image:"url(https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png)",text :"Primary"},
    {image : "url(https://www.gstatic.com/images/icons/material/system/1x/people_black_20dp.png)",text:"Social"},
    {image : "url(https://www.gstatic.com/images/icons/material/system/1x/local_offer_black_20dp.png)",text:"Promotions"}
  ];

  mailArr:any = [{
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "Jun 25"
  },
  {
    dispatcher :"GUVI",
    descpHead : "It's not too late to register for our FREE webinar on Ethical Hacking. ",
    descpContent : "- Don't miss out on your career counseling. You Never Know, what pieces of advice may fall together to help you create a promising future. Maybe that's the reason we're pressing on you to attend our worthwhile webinar on Ethical Hacking. ",
    date : "Jun15"
  },
  {
    dispatcher :"GUVI",
    descpHead : "FREE WEBINAR ALERT: How to Become a Data Scientist in 90 Days ",
    descpContent : "- We've almost midway through 2022, and Data Science remains the most desirable & among the highest paying job. Almost all big tech companies including FAANG are looking for talents to maximize the power of their data-driven strategies. ",
    date : "May16"
  },
  {
    dispatcher :"GUVI",
    descpHead : "Free Masterclass Alert. Business Analytics with real-life examples! ",
    descpContent : "- Do you know whether your business / project needs a descriptive analysis or predictive? What is more crucial to place checkpoint on- is it supply chain management or risk mitigation plans? ",
    date : "May 10"
  },
  {
    dispatcher :"Tharun",
    descpHead : "Test mail",
    descpContent : " - Hello this is tharun.",
    date : "May 8"
  },
  {
    dispatcher :"Github,Mail",
    descpHead : "[GitHub] Please verify your device ",
    descpContent : "- A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.",
    date : "May 5"
  },
  {
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "May 1"
  },
  {
    dispatcher :"The Google team",
    descpHead : " The Google team ",
    descpContent : "- Welcome to Google on your new Linux.Next, take these 2 steps to confirm your Google Account settings.",
    date : "Apr 30"
  },
  {
    dispatcher :"Karan",
    descpHead : "icon",
    descpContent : "- https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png",
    date : "Apr 25"
  },
  {
    dispatcher :"Vignesh",
    descpHead : "Tik Tac Toe",
    descpContent : "- Hi vignesh i done a tic tac toe game please play this game and send me a feedback buddy.",
    date : "Apr 24"
  },
  {
    dispatcher :"GUVI",
    descpHead : "Grab Tech courses at just Rs 9!",
    descpContent : "- We have a great offer for you today! All premium courses are now available to you at the lowest price. Hurry up and grab the offer before it's gone. Don't miss your opportunity to get courses at the lowest price. ",
    date : "Apr 18"
  },
  {
    dispatcher :"Github,Mail",
    descpHead : "[GitHub] Please verify your device ",
    descpContent : "- A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.",
    date : "Apr 11"
  },
  {
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "Apr 5"
  },
  {
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "Mar 25"
  }];

  socialArr:any = [{
    dispatcher :"GUVI",
    descpHead : "Free Masterclass Alert. Business Analytics with real-life examples! ",
    descpContent : "- Do you know whether your business / project needs a descriptive analysis or predictive? What is more crucial to place checkpoint on- is it supply chain management or risk mitigation plans? ",
    date : "May 10"
  },
  {
    dispatcher :"Tharun",
    descpHead : "Test mail",
    descpContent : " - Hello this is tharun.",
    date : "May 8"
  },
  {
    dispatcher :"Github,Mail",
    descpHead : "[GitHub] Please verify your device ",
    descpContent : "- A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.",
    date : "May 5"
  },
  {
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "May 1"
  },
  {
    dispatcher :"The Google team",
    descpHead : " The Google team ",
    descpContent : "- Welcome to Google on your new Linux.Next, take these 2 steps to confirm your Google Account settings.",
    date : "Apr 30"
  }];

  promotionArr:any = [{
    dispatcher :"Github,Mail",
    descpHead : "[GitHub] Please verify your device ",
    descpContent : "- A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.",
    date : "May 5"
  },
  {
    dispatcher :"Google",
    descpHead : "Security alert ",
    descpContent : "- We noticed a new sign-in to your Google Account on a Linux device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.",
    date : "May 1"
  },
  {
    dispatcher :"The Google team",
    descpHead : " The Google team ",
    descpContent : "- Welcome to Google on your new Linux.Next, take these 2 steps to confirm your Google Account settings.",
    date : "Apr 30"
  },
  {
    dispatcher :"Karan",
    descpHead : "icon",
    descpContent : "- https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png",
    date : "Apr 25"
  },
  {
    dispatcher :"Vignesh",
    descpHead : "Tik Tac Toe",
    descpContent : "- Hi vignesh i done a tic tac toe game please play this game and send me a feedback buddy.",
    date : "Apr 24"
  },
  {
    dispatcher :"GUVI",
    descpHead : "Grab Tech courses at just Rs 9!",
    descpContent : "- We have a great offer for you today! All premium courses are now available to you at the lowest price. Hurry up and grab the offer before it's gone. Don't miss your opportunity to get courses at the lowest price. ",
    date : "Apr 18"
  },
  {
    dispatcher :"Github,Mail",
    descpHead : "[GitHub] Please verify your device ",
    descpContent : "- A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.",
    date : "Apr 11"
  }]

  draftArr:{}[] = [];
  TrashArr:{}[] = [];
  starredArr:{}[] = [];
  constructor() { }
}