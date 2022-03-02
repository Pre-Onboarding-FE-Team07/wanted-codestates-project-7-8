# wanted-codestates-project-7-8

충청북도 휴양림 중 마음에 드는 곳에 메모를 남겨 저장하는 서비스입니다.

## 프로젝트 실행 방법

- 배포 사이트
https://chungbuk-foreset.netlify.app/ 

- 로컬

1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-8.git`
2. `npm install`
3. `npm run start`

---

## 프로젝트 구조

```
--📁 src
  ---📁 atoms ➡ Recoil에서 사용되는 atom, selector 등을 모아둔 폴더
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  -- 📁 pages ➡ 페이지 컴포넌트
  -- 📁 utilities ➡ 모듈화된 함수를 모아둔 폴더
```

---

## 팀 멤버

| 이름                                       | 직책 | 역할                                             |
| ------------------------------------------ | ---- | ------------------------------------------------ |
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 휴양림 API 호출 & 데이터 렌더링 (Main Page 구현) |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 무한 스크롤 구현                                 |
| [🎨문선경](https://github.com/dev-seomoon) | 팀장 | 휴양림 저장/삭제/수정 기능 구현                  |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 유저 피드백 (Toast UI) 구현                      |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 휴양림 저장/삭제/수정 기능 구현                  |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 휴양림 API 호출 & 데이터 렌더링 (Main Page 구현) |
| [🚚최민우](https://github.com/exxocism)    | 팀원 | 검색 기능 구현                                   |

---

## 구현한 기능 목록

- API 호출을 통해 휴양림 목록 불러오기
- 무한 스크롤
- 휴양림 정보 클릭 시 저장/수정이 가능한 모달창 표시
- 휴양림 정보 저장/수정/삭제
- 저장된 휴양림 목록 검색
- 유저의 활동에 해당하는 toast 표시

---

## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 박진용

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 문선경

- 프로젝트 환경설정
- 휴양림 저장/삭제/수정 기능 구현

#### 구현한 방법

1. 프로젝트 환경설정

- CRA, npm을 사용해 기본적인 프로젝트 환경 설정을 하고,
  recoil, emotion/styled 등 사용할 패키지들을 추가로 설치함.

2. 휴양림 저장/삭제/수정 기능 구현

- [예효은](https://github.com/ye-yo)님이 모달 컴포넌트의 UI 부분을 구현하셨고,  
  (type prop에 따라 저장 폼/수정 폼으로 UI가 변경되는 것, 모달 외부를 클릭하면 모달창이 닫히는 것 등)  
  나는 Modal 컴포넌트에서 저장/수정/삭제가 이루어지는 **로직 부분을 작성**했다.
- 데이터를 저장/수정하는 `saveData()`, 데이터를 삭제하는 `removeData()` 함수를 작성함.

- `saveData()` : cardData.memo를 유저가 작성한 memo로 저장/수정하고, userList에 변경된 cardData를 반영.  
  (수정/저장 버튼 클릭 시 호출)

- `removeData()` : userList에서 선택된 cardData를 삭제.
  (삭제 버튼 클릭 시 호출)

#### 어려웠던 점 (에러 핸들링)

1. eslint, prettier 충돌 문제

- eslint, prettier 충돌이 발생했는데, 처음에는 구현을 빠르게 시작하기 위해서  
  우선 eslintrc에서 prettier를 무시하도록 설정했었음.
- 나중에 eslint, prettier 충돌을 제대로 해결하기 위해 설정을 바꾸는 과정에서 발생하는 여러 에러가 발생함.

- [https://seomoon.tech/85](https://seomoon.tech/85) 에서와 같이 디버깅하여 해결.

2. 코드 스타일 컨벤션이 지켜지지 않은 PR이 올라오는 문제

- husky로 git pre-commit hook을 설정.
  깃 커밋 전에 lint-staged가 실행되고 lint 적용이 잘 된 경우에만 커밋을 할 수 있도록 강제해서 해결함.

3. OS별로 (Windows, MacOS) 개행 방식이 달라서, windows에서 코드 작성 시 Lint 에러가 뜨는 불편함

- `.gitattributes` 설정 파일 추가해
  windows에서 crlf 개행이 lint 에러로 인식되지 않고, 커밋할 때는 crlf 개행이 lf 개행으로 전환되도록 설정해뒀는데, 제대로 적용이 되는지는 테스트가 필요한 상태임.

## 심채윤

유저 피드백 (Toast UI) 구현

#### 구현한 방법

`useState`를 사용하여 버튼 클릭 시 `handleToast` 함수를 통해 `setToastStatus(true)`를 적용하여 모달창에서 수정, 삭제 클릭 시 `Toast UI`가 화면에 보이게 하였습니다. 또한 삭제, 작성, 저장의 문구가 보일 메세지를 객체로 따로 관리하여 `state`로 같이 관리 할 수 있게 구현하였습니다.
`setTimeout`을 사용하여 `toastStatus`가 `true`인 경우 3초 뒤 자동으로 닫히게 하고, `setToastMsg`를 빈 문자열로 해주었습니다.
이 때, `Toast UI`가 서서히 생기고 사라지는 효과를 주기 위해 `keyframe` 속성을 사용하여 `fadeIn`, `fadeout`을 주어 사라지는 효과를 주었습니다.

#### 어려웠던 점 (에러 핸들링)

`Toast UI`를 `modal`창의 수정, 삭제 버튼 클릭 시 그에 맞는 피드백 메세지를 화면에 보여주려 했습니다. 피드백 메세지를 배열, 객체 등 어떤 식으로 구현을 해야 할지 고민하다 객체로 만들고 state로 같이 관리하게 해주었습니다. `handleToast`함수를 통해 `setToastState(true)`, `setToastMsg(msgLisg[select])`로 모달창에서 버튼 클릭 시 그에 맞는 메세지 `Toast UI`를 구현하였습니다.

## 예효은

휴양림 저장/삭제/수정 기능 구현

#### 구현한 방법

휴양림 저장과 수정에 쓰이는 폼의 레이아웃이 거의 동일해서 공통의 `<Modal/>` 컴포넌트 하나를 만들고 props 값을 다르게 주어 각각의 폼을 만들 수 있게 하였다. props로는 `type`을 두어 `add`인지 `edit`인지 전달받고 `edit` type의 modal 컴포넌트를 요청하는 거라면 메모 영역은 input 태그로 수정가능하게 하였고, 버튼은 수정,삭제 버튼이 나타나도록 처리했다.
일반적인 모달창이 그러하듯 외부 클릭시 close 처리가 되도록 모달창의 가장 바깥 영역인 `ModalContainer`에 click 이벤트를 적용하고 중앙의 모달창 영역인 `ModalBox`에는 click 이벤트에 `e.stopPropagtion`을 두어 `ModalBox`를 클릭했을 때는 `ModalContainer`로 클릭이벤트가 전파되지 않도록 처리했다.

#### 어려웠던 점 (에러 핸들링)

`Modal`컴포넌트가 닫힌 후, 다시 열리지 않는 문제가 있었다. 우선 처음 작성한 코드는 `Modal` 컴포넌트에서 `isOpen` state를 true로 초기화하고 `closeModal` 함수가 호출되면 `false`로 변경하도록 구현했었다. 하지만 `state` 값을 초기화하는 것은 첫 렌더링 시에만 이루어지는 것이고, `Modal` 컴포넌트는 카드 데이터를 클릭할 때마다 새로 생성되는 것이 아니라 전달하는 `cardData` `props`만 변경된다는 것을 놓치고 있었다. 이에 `cardData`가 변경될 때마다 `isOpen` state를 true로 업데이트하여 모달창이 열릴 수 있게 변경하였다.

## 이예지

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 최민우

- 검색 기능 구현
- 저장된 목록 페이지 (&lt;Main /&gt;, '/') UI 구현

#### 구현한 방법

- useRecoilValue를 통해 불러온 값을 이용하여 필터링 하였다.
- 필터링한 값을 `Map()` Method를 사용하여 렌더링 하였다.
- 클릭하는 경우 &lt;Modal /&gt; 컴포넌트로 연계하도록 하였다.
- `+` 버튼을 누르면 추가 페이지 (&lt;PageList /&gt;, '/list') 페이지로 이동하도록 하였다.

#### 어려웠던 점 (에러 핸들링)

- Prettier를 위주로 사용하고 Eslint를 잘 사용하지 않았는데, 초기 commit 단계에서 정확한 설정을 찾는데 어려움이 있었다.
  - 검색과 실험을 통해 정확한 키와 값을 알게 되었으며, 시간이 소요 되었다.
- 윈도우에서 개발을 하게 되었는데 CRLF 관련한 문제가 발생했었다.
  - 검색을 통해 `.eslintrc`를 수정하였으며, `git config`를 수정하여 해결하였다.
- &lt;Modal /&gt; 페이지와의 연계 과정에서 조율이 필요했다.
  - 메신저를 통한 토의로 트러블슈팅을 신속하게 할 수 있었다.
