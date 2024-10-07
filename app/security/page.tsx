'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import Link from 'next/link';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
import classNames from 'classnames';
import { members } from '@wix/members';
import Icon from '@app/shared-components/Icon/Icon';
import style from './pageDashboardSecurity.module.css';
import { Avatar } from 'flowbite-react';

export default function DashboardSecurity() {
  //   const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  //   const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  // const [showLoadingCreatePost, setShowLoadingCreatePost] = useState(false);
  const [isLoadingDeletePostPage, setIsLoadingDeletePostPage] = useState('');
  const [userInfoPage, setUserInfoPage] = useState('');

  const {
    login,
    isLoggedIn,
    loading,
    userDetails,
    logout,
    ownedInfoPages,
    ownedPostPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
    handleUserDataRefresh,
    tags,
  } = useAuth();
  console.log('Dashboard isLoggedIn', isLoggedIn);

    // TODO: move to global SVG import
    const AccountProfileIcon = () => (
      <svg>
        <path d="M23.375 17H10.625V19.125H23.375V17Z"/>
        <path d="M23.375 10.625H10.625V12.75H23.375V10.625Z"/>
        <path d="M16.75 31.875L10.1882 28.3763C8.31741 27.3812 6.75294 25.8953 5.66272 24.0782C4.57249 22.2611 3.99769 20.1816 4.00001 18.0625V4.25C4.00063 3.68661 4.2247 3.14646 4.62308 2.74809C5.02146 2.3497 5.5616 2.12562 6.12501 2.125H27.375C27.9384 2.12562 28.4785 2.3497 28.8769 2.74809C29.2754 3.14646 29.4994 3.68661 29.5 4.25V18.0625C29.5023 20.1814 28.9275 22.2611 27.8373 24.0781C26.747 25.8951 25.1826 27.3809 23.3118 28.376L16.75 31.875ZM6.12501 4.25V18.0625C6.12316 19.7963 6.59351 21.4978 7.48558 22.9846C8.37764 24.4713 9.65773 25.687 11.1885 26.5012L16.75 29.4666L22.3115 26.5012C23.8423 25.687 25.1224 24.4713 26.0144 22.9846C26.9065 21.4978 27.3768 19.7963 27.375 18.0625V4.25H6.12501Z"/>
      </svg>
    );
    const AccountProjectIcon = () => (
      <svg>
        <path d="M16 30C24.0082 30 30.5 23.5082 30.5 15.5C30.5 7.49187 24.0082 1 16 1C7.99187 1 1.5 7.49187 1.5 15.5C1.5 23.5082 7.99187 30 16 30Z"/>
        <path d="M16.0001 11.6333C17.6018 11.6333 18.9001 10.335 18.9001 8.73334C18.9001 7.13172 17.6018 5.83334 16.0001 5.83334C14.3984 5.83334 13.1001 7.13172 13.1001 8.73334C13.1001 10.335 14.3984 11.6333 16.0001 11.6333Z"/>
        <path d="M10.1998 22.2667C11.8015 22.2667 13.0998 20.9683 13.0998 19.3667C13.0998 17.765 11.8015 16.4667 10.1998 16.4667C8.59818 16.4667 7.2998 17.765 7.2998 19.3667C7.2998 20.9683 8.59818 22.2667 10.1998 22.2667Z"/>
        <path d="M21.7999 22.2667C23.4016 22.2667 24.6999 20.9683 24.6999 19.3667C24.6999 17.765 23.4016 16.4667 21.7999 16.4667C20.1982 16.4667 18.8999 17.765 18.8999 19.3667C18.8999 20.9683 20.1982 22.2667 21.7999 22.2667Z"/>
      </svg>
    );
    const AccountPostIcon = () => (
      <svg>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4243 22.8486V24.6061H8.78788e-05V22.8486H11.4243ZM28.1213 22.8486V24.6061H11.4243V22.8486H28.1213ZM19.3334 19.3334V21.091H8.78788e-05V19.3334H19.3334ZM28.1213 19.3334V21.091H19.3334V19.3334H28.1213ZM7.90918 15.8183V17.5758H8.78788e-05V15.8183H7.90918ZM28.1213 15.8183V17.5758H7.90918V15.8183H28.1213ZM24.3758 0L28.1212 12.303V14.0606H8.78788V12.303H26.3232L23.0787 1.75758H5.04248L1.798 12.303H8.78788V14.0606H0L0.0386667 12.0447L3.74539 0H24.3758ZM14.0607 7.90918V9.66675H7.03039V7.90918H14.0607ZM21.091 4.39403V6.1516H7.03039V4.39403H21.091Z"/>
      </svg>
    );    
    const AccountOrgIcon = () => (
      <svg>
        <path d="M30.1875 27.375H4.8125V29.1875H30.1875V27.375Z"/>
        <path d="M27.4688 11.9687C27.7091 11.9687 27.9396 11.8733 28.1096 11.7033C28.2795 11.5333 28.375 11.3028 28.375 11.0625V8.34373C28.3749 8.15748 28.3175 7.97578 28.2104 7.82336C28.1034 7.67093 27.952 7.55518 27.7769 7.49186L17.8081 3.86686C17.609 3.79487 17.391 3.79487 17.1919 3.86686L7.22312 7.49186C7.04797 7.55518 6.89659 7.67093 6.78956 7.82336C6.68254 7.97578 6.62508 8.15748 6.625 8.34373V11.0625C6.625 11.3028 6.72048 11.5333 6.89043 11.7033C7.06039 11.8733 7.2909 11.9687 7.53125 11.9687H8.4375V23.75H6.625V25.5625H28.375V23.75H26.5625V11.9687H27.4688ZM8.4375 8.97811L17.5 5.67936L26.5625 8.97811V10.1562H8.4375V8.97811ZM19.3125 23.75H15.6875V11.9687H19.3125V23.75ZM10.25 11.9687H13.875V23.75H10.25V11.9687ZM24.75 23.75H21.125V11.9687H24.75V23.75Z"/>
      </svg>
    );
    const AccountPersonIcon = () => (
      <svg>
        <path d="M29 6.66667V9.33333C29 9.88533 28.552 10.3333 28 10.3333C27.448 10.3333 27 9.88533 27 9.33333V6.66667C27 5.748 26.252 5 25.3333 5H22.6667C22.1147 5 21.6667 4.552 21.6667 4C21.6667 3.448 22.1147 3 22.6667 3H25.3333C27.356 3 29 4.644 29 6.66667ZM4 10.3333C4.552 10.3333 5 9.88533 5 9.33333V6.66667C5 5.748 5.748 5 6.66667 5H9.33333C9.88533 5 10.3333 4.552 10.3333 4C10.3333 3.448 9.88533 3 9.33333 3H6.66667C4.644 3 3 4.644 3 6.66667V9.33333C3 9.88533 3.448 10.3333 4 10.3333ZM9.33333 27H6.66667C5.748 27 5 26.252 5 25.3333V22.6667C5 22.1147 4.552 21.6667 4 21.6667C3.448 21.6667 3 22.1147 3 22.6667V25.3333C3 27.356 4.644 29 6.66667 29H9.33333C9.88533 29 10.3333 28.552 10.3333 28C10.3333 27.448 9.88533 27 9.33333 27ZM28 21.6667C27.448 21.6667 27 22.1147 27 22.6667V25.3333C27 26.252 26.252 27 25.3333 27H22.6667C22.1147 27 21.6667 27.448 21.6667 28C21.6667 28.552 22.1147 29 22.6667 29H25.3333C27.356 29 29 27.356 29 25.3333V22.6667C29 22.1147 28.552 21.6667 28 21.6667ZM22.6707 20.432C21.2747 23.336 18.8467 25 16 25C13.1533 25 10.7253 23.336 9.32933 20.432C9.12133 20.1373 8.88267 19.8787 8.64933 19.6213C7.91467 18.8093 7 17.796 7 16C7 13.8333 7.96933 11.9933 9.41467 11.3C10.52 8.52267 12.84 7 16 7C19.16 7 21.48 8.52267 22.5853 11.3C24.0307 11.9947 25 13.8347 25 16C25 17.796 24.084 18.808 23.3507 19.6213C23.1173 19.8787 22.8787 20.1387 22.6707 20.432ZM21.8653 18.28C22.524 17.552 23 17.0267 23 16C23 14.3893 22.26 13.228 21.544 13.0373C21.22 12.9507 20.96 12.7067 20.8547 12.3893C20.1027 10.14 18.468 9 15.9987 9C13.5293 9 11.896 10.14 11.1427 12.3893C11.0373 12.7067 10.7787 12.9507 10.4533 13.0373C9.73733 13.2293 8.99733 14.3893 8.99733 16C8.99733 17.0267 9.472 17.552 10.132 18.28C10.4293 18.6107 10.7373 18.9507 11.02 19.3627C11.0493 19.4067 11.076 19.4533 11.1 19.5013C11.7147 20.8067 13.1707 22.9987 15.9987 22.9987C18.8267 22.9987 20.2827 20.8067 20.8973 19.5013C20.9213 19.4533 20.9467 19.4067 20.9773 19.3627C21.26 18.9493 21.568 18.6107 21.8653 18.28Z" fill="currentColor"/>        
      </svg>
    );
    const AccountSecurityIcon = () => (
      <svg>
        <path d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill-rule="evenodd"/><path d="M8 8c-2.972 0-5.377 2.338-5.895 5.118C1.9 14.217 2.83 15 3.75 15h8.5c.92 0 1.85-.783 1.645-1.882C13.377 10.338 10.972 8 8 8Zm-4.42 5.393C3.984 11.225 5.846 9.5 8 9.5s4.016 1.725 4.42 3.893c.003.014.001.02 0 .022a.071.071 0 0 1-.017.027.213.213 0 0 1-.153.058h-8.5a.213.213 0 0 1-.153-.058.072.072 0 0 1-.018-.026c0-.003-.002-.008 0-.023Z" fill-rule="evenodd"/>
      </svg>
    );     
    const AccountUserIcon = () => (
      <svg>
        <path fill="currentColor" fill-rule="evenodd" d="M6.75 6.812c0 3.598 2.258 6.313 5.25 6.313 2.993 0 5.25-2.715 5.25-6.313 0-2.88-2.403-5.312-5.25-5.312-2.846 0-5.25 2.432-5.25 5.312ZM12 3.32c-1.822 0-3.42 1.629-3.42 3.485 0 2.563 1.47 4.497 3.42 4.497s3.42-1.934 3.42-4.497c0-1.856-1.597-3.485-3.42-3.485ZM4.138 22.5l.158-1.742c.37-3.523 4.376-4.3 7.704-4.3 3.327 0 7.333.775 7.703 4.283l.157 1.759h1.883l-.175-1.939c-.403-3.83-3.776-5.936-9.568-5.936s-9.167 2.104-9.572 5.95l-.17 1.925h1.88Z" clip-rule="evenodd"/>      
      </svg>
    );  
    const AccountKeyIcon = () => (
      <svg>
        <path fill="currentColor" d="M23.682,6.85 L19.373,2.541 C18.9825001,2.15061806 18.3494999,2.15061806 17.959,2.541 L8.8,11.7 C6.17398606,10.3084594 2.92525121,11.0444697 1.15537667,13.4319115 C-0.614497872,15.8193534 -0.374369625,19.1417513 1.72042432,21.2498719 C3.81521827,23.3579926 7.13602654,23.6191853 9.5346442,21.8644865 C11.9332619,20.1097878 12.6898595,16.8657857 11.315,14.231 L15.782,9.764 L18.275,12.257 C18.4702499,12.452191 18.7867501,12.452191 18.982,12.257 L21.212,10.027 L18.368,7.177 L19.189,6.357 L22.035,9.2 L23.682,7.553 C23.8745401,7.35821683 23.8745401,7.04478317 23.682,6.85 Z M5,20 C3.8954305,20 3,19.1045695 3,18 C3,16.8954305 3.8954305,16 5,16 C6.1045695,16 7,16.8954305 7,18 C7,19.1045695 6.1045695,20 5,20 Z"/>    
      </svg>
    );  
    const AccountSettingsIcon = () => (
      <svg>
        <g stroke-width="2" fill="currentColor" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="14,6 23,6 23,23 1,23 1,6 10,6 "></polyline> <path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M14,8h-4V3 c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2V8z"></path> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="15" y1="13" x2="19" y2="13"></line> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="15" y1="17" x2="19" y2="17"></line> <path data-color="color-2" data-stroke="none" d="M4,19c0-1.657,1.343-3,3-3h2c1.657,0,3,1.343,3,3H4z" stroke-linejoin="miter" stroke-linecap="square" stroke="none"></path> <circle data-color="color-2" data-stroke="none" cx="8" cy="13" r="2" stroke-linejoin="miter" stroke-linecap="square" stroke="none"></circle></g>
      </svg>
    );      
    const AccountArticleIcon = () => (
      <svg>
        <path d="M5 5.17067V4C5 3.20435 5.31607 2.44129 5.87868 1.87868C6.44129 1.31607 7.20435 1 8 1H18C18.7956 1 19.5587 1.31607 20.1213 1.87868C20.6839 2.44129 21 3.20435 21 4V5.17067M5 5.17067C5.31333 5.06 5.64933 5 6 5H20C20.3507 5 20.6867 5.06 21 5.17067M5 5.17067C4.41495 5.37751 3.90844 5.76069 3.55025 6.26741C3.19206 6.77413 2.99981 7.37946 3 8V9.17067M21 5.17067C21.585 5.37751 22.0916 5.76069 22.4498 6.26741C22.8079 6.77413 23.0002 7.37946 23 8V9.17067M3 9.17067C3.31333 9.06 3.64933 9 4 9H22C22.3406 8.99961 22.6788 9.05732 23 9.17067M3 9.17067C1.83467 9.58267 1 10.6933 1 12V20C1 20.7957 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H22C22.7957 23 23.5587 22.6839 24.1213 22.1213C24.6839 21.5587 25 20.7957 25 20V12C25.0002 11.3795 24.8079 10.7741 24.4498 10.2674C24.0916 9.76069 23.585 9.37751 23 9.17067"/>
      </svg>
    );     
    
    const AccountLogoutIcon = () => (
      <svg>
        <path d="M15.7271 3L11.4844 7.24264"/>
        <path d="M19.9701 7.24414L15.7275 11.4868"/>
        <path d="M7.24257 15.7285L3.70703 19.264"/>
        <path d="M8.65674 4.41602L18.5562 14.3155"/>
        <path d="M7.24222 7.24437L9.36354 5.12305L17.8489 13.6083L15.7275 15.7296C14.6023 16.8549 13.0762 17.487 11.4849 17.487C9.89356 17.487 8.36744 16.8549 7.24222 15.7296C6.117 14.6044 5.48486 13.0783 5.48486 11.487C5.48486 9.89571 6.117 8.36959 7.24222 7.24437Z"/>
      </svg>
    );  
    
    const AccountSmallKeyIcon = () => (
      <svg>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66675 5.33352C3.93342 5.33352 3.33323 4.73389 3.33323 4C3.33323 3.26668 3.93342 2.66648 4.66675 2.66648C5.40007 2.66648 6.00027 3.26668 6.00027 4C6.00027 4.73389 5.40007 5.33352 4.66675 5.33352ZM8.43321 2.66648C7.88661 1.11352 6.40642 0 4.66675 0C2.46001 0 0.666748 1.79382 0.666748 4C0.666748 6.20674 2.46001 8 4.66675 8C6.40642 8 7.88661 6.88648 8.43321 5.33352H11.3332V8H14.0003V5.33352H15.3332V2.66648H8.43321Z" fill="currentColor"/>
      </svg>
    );   
    
    const AccountVerifyIcon = () => (
      <svg>
          <path d="M11 21H9V19C9.00087 18.2046 9.31722 17.4421 9.87964 16.8796C10.4421 16.3172 11.2046 16.0009 12 16H18V18H12C11.7349 18.0003 11.4807 18.1057 11.2932 18.2932C11.1057 18.4807 11.0003 18.7349 11 19V21Z" fill="black"/>
          <path d="M15 15C14.2089 15 13.4355 14.7654 12.7777 14.3259C12.1199 13.8864 11.6072 13.2616 11.3045 12.5307C11.0017 11.7998 10.9225 10.9956 11.0769 10.2196C11.2312 9.44372 11.6122 8.73098 12.1716 8.17157C12.731 7.61216 13.4437 7.2312 14.2196 7.07686C14.9956 6.92252 15.7998 7.00173 16.5307 7.30448C17.2616 7.60723 17.8864 8.11992 18.3259 8.77772C18.7654 9.43552 19 10.2089 19 11C18.9988 12.0605 18.577 13.0772 17.8271 13.8271C17.0772 14.577 16.0605 14.9988 15 15ZM15 9C14.6044 9 14.2178 9.1173 13.8889 9.33706C13.56 9.55683 13.3036 9.86918 13.1522 10.2346C13.0009 10.6001 12.9613 11.0022 13.0384 11.3902C13.1156 11.7781 13.3061 12.1345 13.5858 12.4142C13.8655 12.6939 14.2219 12.8844 14.6098 12.9616C14.9978 13.0387 15.3999 12.9991 15.7654 12.8478C16.1308 12.6964 16.4432 12.44 16.6629 12.1111C16.8827 11.7822 17 11.3956 17 11C16.9994 10.4697 16.7886 9.96135 16.4136 9.5864C16.0386 9.21145 15.5303 9.00056 15 9Z" fill="black"/>
          <path d="M24 22C23.2089 22 22.4355 21.7654 21.7777 21.3259C21.1199 20.8864 20.6072 20.2616 20.3045 19.5307C20.0017 18.7998 19.9225 17.9956 20.0769 17.2196C20.2312 16.4437 20.6122 15.731 21.1716 15.1716C21.731 14.6122 22.4437 14.2312 23.2196 14.0769C23.9956 13.9225 24.7998 14.0017 25.5307 14.3045C26.2616 14.6072 26.8864 15.1199 27.3259 15.7777C27.7654 16.4355 28 17.2089 28 18C27.9988 19.0605 27.577 20.0772 26.8271 20.8271C26.0772 21.577 25.0605 21.9988 24 22ZM24 16C23.6044 16 23.2178 16.1173 22.8889 16.3371C22.56 16.5568 22.3036 16.8692 22.1522 17.2346C22.0009 17.6001 21.9613 18.0022 22.0384 18.3902C22.1156 18.7781 22.3061 19.1345 22.5858 19.4142C22.8655 19.6939 23.2219 19.8844 23.6098 19.9616C23.9978 20.0387 24.3999 19.9991 24.7654 19.8478C25.1308 19.6964 25.4432 19.44 25.6629 19.1111C25.8827 18.7822 26 18.3956 26 18C25.9994 17.4697 25.7886 16.9614 25.4136 16.5864C25.0386 16.2115 24.5303 16.0006 24 16Z" fill="black"/>
          <path d="M30 28H28V26C27.9997 25.7349 27.8943 25.4807 27.7068 25.2932C27.5193 25.1057 27.2651 25.0003 27 25H21C20.7349 25.0003 20.4807 25.1057 20.2932 25.2932C20.1057 25.4807 20.0003 25.7349 20 26V28H18V26C18.0009 25.2046 18.3172 24.4421 18.8796 23.8796C19.4421 23.3172 20.2046 23.0009 21 23H27C27.7954 23.0009 28.5579 23.3172 29.1204 23.8796C29.6828 24.4421 29.9991 25.2046 30 26V28Z" fill="black"/>
          <path d="M14 30L7.82421 26.7071C6.06347 25.7704 4.59105 24.372 3.56496 22.6618C2.53887 20.9517 1.99787 18.9944 2.00001 17V4C2.00056 3.46974 2.21145 2.96135 2.58641 2.5864C2.96136 2.21145 3.46974 2.00056 4.00001 2H24C24.5303 2.00056 25.0387 2.21145 25.4136 2.5864C25.7886 2.96135 25.9994 3.46974 26 4V17C26.0021 18.9944 25.4611 20.9517 24.4351 22.6618C23.409 24.372 21.9365 25.7704 20.1758 26.7071L14 30ZM4.00001 4V17C3.99828 18.6318 4.44096 20.2333 5.28055 21.6325C6.12014 23.0318 7.32493 24.176 8.76561 24.9423L14 27.7333L19.2344 24.9423C20.6751 24.176 21.8799 23.0318 22.7195 21.6325C23.559 20.2333 24.0017 18.6318 24 17V4H4.00001Z" fill="black"/>
          <path d="M24 13.5C22.3188 13.5 20.6755 13.9985 19.2776 14.9325C17.8798 15.8665 16.7904 17.194 16.147 18.7472C15.5037 20.3004 15.3353 22.0094 15.6633 23.6583C15.9913 25.3071 16.8008 26.8217 17.9896 28.0104C19.1783 29.1992 20.6929 30.0087 22.3417 30.3367C23.9906 30.6647 25.6996 30.4963 27.2528 29.853C28.806 29.2096 30.1335 28.1202 31.0675 26.7223C32.0015 25.3245 32.5 23.6811 32.5 22C32.5 19.7457 31.6045 17.5837 30.0104 15.9896C28.4163 14.3955 26.2543 13.5 24 13.5Z" fill="#047E43" stroke="white" stroke-width="3"/>
          <path d="M27 20L23 24L21 22" stroke="white" stroke-width="1.5"/>
      </svg>
    );       
   
    const AccountCardIcon = () => (
      <svg>
          <path d="M10.5 20.7143C11.3306 20.7141 12.1424 20.471 12.8329 20.0158C13.5234 19.5606 14.0616 18.9136 14.3794 18.1567C14.6973 17.3998 14.7804 16.567 14.6185 15.7634C14.4565 14.9599 14.0566 14.2218 13.4694 13.6424C12.882 13.0632 12.1337 12.6688 11.3191 12.509C10.5045 12.3492 9.66019 12.4313 8.89285 12.7448C8.12551 13.0583 7.46963 13.5891 7.00811 14.2702C6.5466 14.9514 6.30018 15.7522 6.3 16.5714C6.3 17.6702 6.7425 18.7239 7.53015 19.5009C8.3178 20.2778 9.38609 20.7143 10.5 20.7143ZM10.5 14.5C10.9155 14.4999 11.3217 14.6213 11.6672 14.849C12.0127 15.0767 12.2819 15.4003 12.4409 15.779C12.5998 16.1576 12.6413 16.5743 12.5601 16.9762C12.4789 17.3782 12.2787 17.7473 11.9847 18.037C11.6909 18.3266 11.3167 18.5239 10.9093 18.6037C10.5019 18.6836 10.0797 18.6425 9.69594 18.4856C9.31223 18.3287 8.9843 18.0631 8.75362 17.7224C8.52294 17.3817 8.39988 16.9811 8.4 16.5714C8.4 16.0221 8.62125 15.4952 9.01508 15.1067C9.4089 14.7182 9.94304 14.5 10.5 14.5ZM8.4 4.14286H12.6V6.21429H8.4V4.14286ZM18.9 0H2.1C1.54305 0 1.0089 0.218239 0.615076 0.606707C0.221249 0.995175 0 1.52205 0 2.07143V26.9286C0 27.4779 0.221249 28.0048 0.615076 28.3933C1.0089 28.7818 1.54305 29 2.1 29H18.9C19.4565 28.999 19.9899 28.7804 20.3836 28.392C20.7774 28.0036 20.9989 27.4775 21 26.9286V2.07143C21 1.52205 20.7787 0.995175 20.3849 0.606707C19.9911 0.218239 19.457 0 18.9 0ZM14.7 26.9286H6.3V24.8571C6.3 24.5825 6.41062 24.319 6.60754 24.1248C6.80445 23.9305 7.07152 23.8214 7.35 23.8214H13.65C13.9285 23.8214 14.1955 23.9305 14.3925 24.1248C14.5894 24.319 14.7 24.5825 14.7 24.8571V26.9286ZM16.8 26.9286V24.8571C16.8 24.0331 16.4681 23.2428 15.8774 22.6601C15.2866 22.0774 14.4854 21.75 13.65 21.75H7.35C6.51457 21.75 5.71335 22.0774 5.12261 22.6601C4.53187 23.2428 4.2 24.0331 4.2 24.8571V26.9286H2.1V2.07143H18.9V26.9286H16.8Z" fill="currentColor"/>
      </svg>
    );   
    
    const AccountHumanIcon = () => (
      <svg>
        <path d="M11 6.00099C12.473 6.00099 13.667 4.80694 13.667 3.33399C13.667 1.86105 12.473 0.666992 11 0.666992C9.52706 0.666992 8.33301 1.86105 8.33301 3.33399C8.33301 4.80694 9.52706 6.00099 11 6.00099Z" fill="currentColor"/>
        <path d="M16.186 8.81399C15.666 8.29399 14.773 7.33399 13.04 7.33399H9.65301C5.98601 7.31999 3.00001 4.33399 3.00001 0.666992H0.333008C0.333008 4.87999 3.14601 8.45399 7.00001 9.61399V27.334H9.66601V19.334H12.333V27.334H15V11.4L20.266 16.667L22.146 14.787L16.186 8.81399Z" fill="currentColor"/>      
      </svg>
    );   

    const AccountLockIcon = () => (
      <svg>
        <path d="M15.066 0.265974L25.566 3.62597C26.2727 3.85196 26.8893 4.29668 27.3268 4.89595C27.7643 5.49521 28.0001 6.218 28 6.95997V14C28 17.132 27.36 20.364 25.394 23.364C23.428 26.36 20.224 28.99 15.33 31.074C14.9095 31.2531 14.4571 31.3454 14 31.3454C13.5429 31.3454 13.0905 31.2531 12.67 31.074C7.776 28.99 4.572 26.36 2.606 23.364C0.64 20.364 1.17537e-08 17.132 1.17537e-08 14V6.95997C-6.0777e-05 6.218 0.235673 5.49521 0.673168 4.89595C1.11066 4.29668 1.72728 3.85196 2.434 3.62597L12.934 0.265974C13.6273 0.0439918 14.3727 0.0439918 15.066 0.265974ZM13.846 3.12397L13.848 3.12597L3.348 6.48597C3.24752 6.51836 3.15981 6.58159 3.09733 6.66669C3.03486 6.75178 3.0008 6.85441 3 6.95997V14C3 16.72 3.55 19.332 5.114 21.718C6.682 24.106 9.356 26.402 13.846 28.314C13.8947 28.3348 13.9471 28.3455 14 28.3455C14.0529 28.3455 14.1053 28.3348 14.154 28.314C18.644 26.4 21.318 24.108 22.886 21.72C24.45 19.332 25 16.716 25 14V6.95997C24.9999 6.85399 24.9662 6.75077 24.9036 6.66522C24.8411 6.57966 24.753 6.51619 24.652 6.48397L14.152 3.12397C14.0525 3.09199 13.9455 3.09199 13.846 3.12397ZM17 13C17 14.072 16.428 15.064 15.5 15.6V20.5C15.5 20.8978 15.342 21.2793 15.0607 21.5606C14.7794 21.8419 14.3978 22 14 22C13.6022 22 13.2206 21.8419 12.9393 21.5606C12.658 21.2793 12.5 20.8978 12.5 20.5V15.6C12.044 15.3367 11.6653 14.9581 11.402 14.5021C11.1387 14.0461 11.0001 13.5289 11 13.0024C10.9999 12.4759 11.1384 11.9586 11.4016 11.5025C11.6647 11.0465 12.0433 10.6677 12.4992 10.4043C12.9551 10.1409 13.4723 10.0021 13.9988 10.0019C14.5253 10.0017 15.0426 10.1401 15.4988 10.4031C15.9549 10.6661 16.3337 11.0446 16.5972 11.5004C16.8608 11.9563 16.9997 12.4734 17 13Z" fill="currentColor"/>
      </svg>
    );      

    const AccountPasswordIcon = () => (
      <svg>
        <path d="M9 3.66281C9.35362 3.66281 9.69276 3.80329 9.94281 4.05334C10.1929 4.30338 10.3333 4.64252 10.3333 4.99614M13 4.99614C13.0002 5.62092 12.854 6.23706 12.5732 6.79518C12.2924 7.35329 11.8847 7.83786 11.3829 8.21006C10.8811 8.58226 10.2991 8.83173 9.68347 8.93849C9.06788 9.04524 8.43584 9.00631 7.838 8.82481L6.33333 10.3295H5V11.6628H3.66667V12.9961H1.66667C1.48986 12.9961 1.32029 12.9259 1.19526 12.8009C1.07024 12.6759 1 12.5063 1 12.3295V10.6055C1.00004 10.4287 1.0703 10.2591 1.19533 10.1341L5.17133 6.15814C5.00497 5.60815 4.95904 5.02877 5.0367 4.45944C5.11435 3.89011 5.31375 3.34419 5.62133 2.85884C5.92891 2.37349 6.33744 1.96011 6.81913 1.64682C7.30082 1.33354 7.84434 1.12771 8.41272 1.04335C8.9811 0.958984 9.56098 0.998066 10.1129 1.15793C10.6648 1.3178 11.1758 1.5947 11.6111 1.96979C12.0464 2.34487 12.3958 2.80934 12.6354 3.33157C12.8751 3.8538 12.9994 4.42154 13 4.99614Z" stroke="currentColor"/>
      </svg>
    );  

    
  const router = useRouter();
  const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  const handleCreatePost = async () => {
    router.push(`/post/New_Post`);
  };

  const handleCreateProject = async () => {
    router.push(`/project/New_Project`);
  };

  const handleCreatePersonInfoPage = async () => {
    if (userInfoPage) {
      router.push(`/person/${userInfoPage}`);
      return;
    }
    router.push(`/person/New_Info_Page`);
  };

  const handleCreateOrganisation = async () => {
    router.push(`/organisation/New_Organisation`);
  };

  const handleDeletePostPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'PostPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

  const handleDeleteInfoPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'InfoPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

  console.log('loading', loading);

  useEffect(() => {
    // console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    // Get the user's tag page link
    if (isLoggedIn && tags) {
      const userTag = tags.find(
        (tag: any) => tag.name === userDetails.userName && tag.tagPageLink
      );
      console.log('userTag', userTag);
      if (userTag) {
        setUserInfoPage(userTag?.tagPageLink);
      }
    }
  }, [isLoggedIn, router, loading]);

  if (!isLoggedIn) {
    //Loading Spinner
    return <LoadingSpinner />;
  }
  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  // const handleChangeNickname = async () => {
  //   const member = await updateMember(userDetails.contactId, {
  //     profile: {
  //       nickname: 'Alexandru-Sergiu Ciobanasu',
  //     },
  //   });
  //   console.log('gotMember', member);
  // };

  return (
    <div className={classNames(style.UserDashboard, "flex flex-col")}>
      <div className={classNames(style.UserDashboardWrapper, "flex m-auto justify-center relative")}>
        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
          <button
            onClick={handleCreatePost}
            className={classNames(
              'font-semibold flex flex-col justify-center items-center'
            )}
          >
            <Icon 
              className="mb-2" 
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            >
              <AccountPostIcon />
            </Icon>            
            <span>Posts</span>
          </button>
        </div>

        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
          <button
            onClick={handleCreateProject}
            className={classNames(
              'font-semibold flex flex-col justify-center items-center'
            )}
          >
            <Icon 
              className="mb-2" 
              size={38}
              fill={'none'}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              inline={false}
            >
              <AccountProjectIcon />
            </Icon>            
            <span>Projects</span>
          </button>
        </div>

        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
            <button
              onClick={handleCreateOrganisation}
              className={classNames(
                'font-semibold flex flex-col justify-center items-center'
              )}
            >
            <Icon 
              className="mb-2" 
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            >
              <AccountOrgIcon />
            </Icon>              
            <span>Organisation</span>
            </button>
        </div>

        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
        <button
          onClick={handleCreatePersonInfoPage}
          className='font-semibold flex flex-col justify-center items-center'
        >
            <Icon 
              className="mb-2" 
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            >
              <AccountPersonIcon />
            </Icon>             
          {userInfoPage ? 'View Info Page' : 'Person Page'}
        </button>
        </div>

        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
        <button
          onClick={handleCreatePersonInfoPage}
          className='font-semibold flex flex-col justify-center items-center'
        >
            <Icon 
              className="mb-2" 
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            >
              <AccountSettingsIcon />
            </Icon>             
          {userInfoPage ? 'Profile settings' : 'Profile settings'}
        </button>
        </div>        

        <div className={classNames(style.UserDashboardNavItem, "text-purple-site flex justify-center")}>
          <button
            onClick={handleLogOut}
            className="font-semibold flex flex-col justify-center items-center"
          >
            <Icon 
              className="mb-2" 
              sizeW={28}
              sizeH={28}
              viewBox={'-3 0 28 28'}
              fill={'none'}
              strokeWidth={2}
              inline={false}
            >
              <AccountLogoutIcon />
            </Icon>                  
            Log Out
          </button>
        </div>

      </div>
      <div className={style.subnavDashboard}>
        <ul className={classNames(style.UserDashboardWrapper, 'flex flex-row m-auto align-center place-content-evenly')}>
          <li>
          <Link
                    href={`/dashboard`}
                    className={classNames(style.subnavLink, '')}>
                    Profile information
              </Link>
          </li>
          <li>
              <Link
                    href={`/security`}
                    className={classNames(style.active, '')}>
                    Security
              </Link>
          </li>
          <li>
          <Link
                    href={`/change-password`}
                    className={classNames(style.subnavLink, '')}>
                    Password
              </Link>
          </li>
        </ul>
      </div>

<div className={classNames(style.UserDashboardWrapper, 'flex flex-col relative m-auto mt-10 mb-6')}>
      <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>Keep account safe</h1>
      <p className='text-base text-[#606b85]'>Info about your security preferences across futures4europe services. Manage all your security information and options  to help you keep your account secure.</p>

      <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h3 
              className={classNames(style.headingDashboardh3, 'mr-4 flex flex-row items-center')}
            >
            <Icon 
                className="mb-0" 
                sizeW={38}
                sizeH={38}
                fill={'currentColor'}
                strokeWidth={0}
                inline={true}
              >
                <AccountLockIcon />
            </Icon>             
            </h3>
          </div>

          <div className='flex flex-col justify-between'>
            <h2 className={classNames(style.headingDashboardh1, 'mt-8 mb-0 flex flex-row items-center')}>
              Basic security information
            </h2>
            <p className={classNames(style.boxTextDashboard, 'mb-8')}>Make sure you can always access your Account by keeping this information up to date.</p>
          </div>

          <div className={classNames(style.listDashboard, 'flex flex-col text-base text-[#606b8580]')}>
            <div className={'pt-2 pb-2 flex flex-row items-center justify-between'}>
              <span className=''>Recovery email</span>
              <span className='ml-4'>{userDetails?.email}</span>
            </div>

            <div className={'pt-2 pb-2 flex flex-row items-center justify-between'}>
              <span className=''>Last login</span>
              <span className='ml-4'>{userDetails?.lastLoginDate}</span>
            </div>

            <div className={'pt-2 pb-2 flex flex-row items-center justify-between'}>
              <span className=''>Google login</span>
              <span className='ml-4'>            
                <img
                  alt=""
                  className="h-5 mr-2"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
              />
              </span>
            </div>


            <div className={'flex'}>
              <Link
                      href={`/change-password`}
                      className={classNames(style.active, 'pt-2 pb-2 flex flex-row grow items-center justify-between')}>
                
                <span className=''>Change password</span>
                <span className='ml-4'>
                  <Icon 
                      className="text-color-white" 
                      sizeW={28}
                      sizeH={28}
                      viewBox={'0 0 28 14'}
                      fill={'none'}
                      strokeWidth={1}
                      inline={false}
                    >
                      <AccountPasswordIcon />
                  </Icon>  
                </span>
              </Link>
            </div>
          </div>          
          
        </div>
      </div>

      <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h3 
              className={classNames(style.headingDashboardh3, 'mr-4 flex flex-row items-center')}
            >
            <Icon 
                className="mb-0" 
                sizeW={38}
                sizeH={38}
                fill={'currentColor'}
                strokeWidth={0}
                inline={true}
              >
                <AccountHumanIcon />
            </Icon>             
              
            </h3>
          </div>

          <div className='flex flex-col justify-between'>
            <h2 className={classNames(style.headingDashboardh1, 'mt-8 mb-0 flex flex-row items-center')}>
              Contact information
            </h2>
            <p className={classNames(style.boxTextDashboard, 'mb-8')}>Your contact information is important for enabling to reach you. It includes details like your email address, phone number, and possibly a mailing address.</p>
          </div>

            <div className={classNames(style.listDashboard, 'flex flex-col text-base text-[#606b8580]')}>
              <div className={'pt-2 pb-2 flex flex-row items-center justify-between'}>
                <span className=''>Contact email</span>
                <span className='ml-4'>{userDetails?.email}</span>
              </div>

              <div className={'pt-2 pb-2 flex flex-row items-center justify-between'}>
                <span className=''>Account status</span>
                <span className='ml-4'>{userDetails?.activityStatus}</span>
              </div>

              <div className={'flex'}>
                <Link
                        href={`/change-password`}
                        className={classNames(style.active, 'pt-2 pb-2 flex flex-row grow items-center justify-between')}>
                  
                  <span className=''>Change Privacy Status</span>
                  <span className='flex flex-row items-center ml-4'>
                    {userDetails?.privacyStatus}
                    <Icon 
                        className="text-color-white ml-2" 
                        sizeW={28}
                        sizeH={28}
                        viewBox={'0 0 28 14'}
                        fill={'none'}
                        strokeWidth={1}
                        inline={false}
                      >
                        <AccountPasswordIcon />
                    </Icon>  
                  </span>
                </Link>
              </div>
            </div>              
          
        </div>
      </div>
            
</div>   
      {ownedPostPages.length || ownedInfoPages.length ? (
        <div className="mt-10">
          <h2>Owned Items</h2>
          {ownedPostPages.length > 0 ? (
            ownedPostPages.map((postPage) => (
              <div key={postPage?.data?.title}>
                <div className="my-4 flex">
                  Post Page: <strong> {postPage?.data?.title}</strong>
                  <Link
                    href={`/post/${postPage?.data?.slug}`}
                    className="mx-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View Post Page
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => handleDeletePostPage(postPage.data._id)}
                      className="mx-4 px-4 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete Post Page
                    </button>
                    {isLoadingDeletePostPage &&
                      isLoadingDeletePostPage === postPage?.data?._id && (
                        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                          <LoadingSpinner />
                        </div>
                      )}
                  </div>
                </div>

                {/* <pre>{JSON.stringify(postPage.data, null, 2)}</pre> */}
              </div>
            ))
          ) : (
            <div>No Post Pages</div>
          )}
          {ownedInfoPages.length > 0 ? (
            ownedInfoPages.map((infoPage) => (
              <div key={infoPage.data.title}>
                <div className="my-4">
                  Info Page: <strong> {infoPage.data.title}</strong>
                  <Link
                    href={`/${extractInfoPageTypeBasedOnTag(
                      infoPage?.data?.pageTypes[0]
                    )}/${infoPage.data.slug}`}
                    className="mx-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View Info Page
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => handleDeleteInfoPage(infoPage.data._id)}
                      className="mx-4 px-4 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete Info Page
                    </button>
                    {isLoadingDeletePostPage &&
                      isLoadingDeletePostPage === infoPage?.data?._id && (
                        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                          <LoadingSpinner />
                        </div>
                      )}
                  </div>
                </div>

                {/* <pre>{JSON.stringify(infoPage.data, null, 2)}</pre> */}
              </div>
            ))
          ) : (
            <div>No Info Pages</div>
          )}
        </div>
      ) : (
        <>
          {ownedPostPagesFetched && ownedInfoPagesFetched ? (
            <div>No Owned Items</div>
          ) : (
            <LoadingSpinner />
          )}
        </>
      )}
    </div>
  );
}
