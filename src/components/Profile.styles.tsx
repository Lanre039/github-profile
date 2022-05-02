import Styled from "styled-components";

const Wrapper = Styled.div`
 
.bio {
  color: #24292e;
  font-weight: 400;
  margin-top: -60px;
}

.small_margin {
  margin-top: 0;
  margin-bottom: 7px;  
}

.menu_bar {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #24292d1e;
  background: white;
  opacity: 1 !important;
  z-index: 999;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 7rem;
}

.menu {
  display: flex;
  justify-content: flex-start;
  margin: 0 1rem;
}

.menu__menu-item {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 30px;
  color: #24292e;
  text-align: center;
  white-space: nowrap;
  background-color: initial;
  border: 0;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.36s ease-in;
  cursor: pointer;
}

.menu__menu-item:hover {
  border-bottom: 2px solid lightgray;
}

.menu__menu-item--selected {
  font-weight: 600;
  color: #24292e;
  border-bottom-color: #f9826c;
  outline: 1px dotted transparent;
  outline-offset: -1px;
}

.menu__menu-item--selected:hover {
  border-bottom: 2px solid salmon;
}

.main_content {
  padding: 1rem 2rem;
  display: flex;
}
.main__content-left {
    padding: 0 1rem;
  position: relative;
  z-index: 9;
}
.main__content-right {
    flex-grow: 1;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
}



.repositories {
  padding: 0 1rem;
}

.repositories__search {
  padding-bottom: 1rem;
  
  flex-grow: 1;
}

.filters {
    border-radius: 6px;
    height: 30px;
    cursor: pointer;
}

.repositories__search input {
  width: 100%;
  padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292f;
    vertical-align: middle;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgba(208,215,222,0.2);
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
}

.repositories__list {
  padding: 1rem 0;
  border-bottom: 1px solid #eaecef;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.repositories__list--total > b {
  font-weight: 500;
}

.repositories__collection {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: fit-content;
}

.star__box {
    color: #24292f;
    background-color: #f6f8fa;
    border: 1px solid rgba(27,31,36,0.15);
    border-color: rgba(27,31,36,0.15);
    box-shadow: 0 1px 0 rgba(27,31,36,0.04),inset 0 1px 0 rgba(255,255,255,0.25);
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
    padding: 5px 12px;
}

.border__top-right {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
}
.border__top-left {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
}
.border_bottom {
    border-bottom: 1px solid #eaecef;
}

.repository {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 1.5rem 0;
}

.repository__name {
  color: #0568d6;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  text-decoration: none;
}

.title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

.title a {
    outline: none;
    text-decoration: none;
}

.label {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2em;
    border-color: #d0d7de;
    vertical-align: middle;
    color: #57606a;
    border-color: #d0d7de;
    margin-left: 7px; 
}

.repository__title {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.repository__details--description {
  font-size: 14px;
  margin: 1rem 0;
}

.repository__metadata--languages {
  display: flex;
  align-items: center;
}

.repository__metadata {
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  margin: 1rem 0;
}

.repository__metadata > div {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.repository__starbutton {
  padding: 0 1rem;
}

.repository__starbutton > button {
  border-width: 1px;
  padding: 3px 12px;
  font-size: 12px;
  border-color: #1b1f2326;
  border-radius: 6px;
  background-color: #fafbfc;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.repository__starbutton > button:hover {
  background-color: #f3f4f6;
  border-color: #1b1f2326;
  transition-duration: 0.1s;
}

.repository__starbutton > button:hover {
  background-color: lightgrey;
  cursor: pointer;
}


aside > div {
  z-index: -4;
}

#profileImage {
  border-radius: 50%;
  width: 100%;
}

.bio {
  border-radius: 50%;

}

.follow-btn {
   width:100%;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid rgba(27,31,36,0.15);
    border-radius: 6px;
    color: #000;
    text-align: center;
    background-color: #EEF1F2;
}

.small-user {
  height: 3rem;
  width: 100%;
  position: absolute;
  padding-left: 5rem;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid #24292d1e;
  z-index: 2;
  display: flex;
  align-items: center;
}

.small-user > div {
  display: flex;
  align-items: center;
}

#image-container {
  z-index: 1000;
}

.username,
.alias {
    margin-top:5px;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #57606a;
}
.alias {
    font-size: 16px;
    margin-top:10px; 
    margin-bottom:6px; 
}
.name {
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 0;
}

.circlify {
  padding: 8px;
  height: 10px;
  display: inline-block;
  width: 10px;
  background: red;
  border-radius: 100%;
  margin-right: 10px;
}

.achievement {
    border-top: 1.5px solid #24292d1e; 
    padding-top: 5px;
    margin-top: 8px;
}


.count {
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #000;
    text-align: center;
    background-color: #EEF1F2;
    border: 1px solid rgba(0,0,0,0);
    border-radius: 2em;
    margin-left: 4px;
    color: #24292f;
    background-color: rgba(175,184,193,0.2);
  }

`;

export default Wrapper;
