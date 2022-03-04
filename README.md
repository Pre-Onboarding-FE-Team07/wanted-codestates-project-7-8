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

## 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> 
<img src="https://img.shields.io/badge/Emotion-E6526F.svg?&style=for-the-badge&logo=Emotion&logoColor=000"/> 
<img src="https://img.shields.io/badge/Recoil-0066FF.svg?&style=for-the-badge&logo=Recoil&logoColor=fff" />


---

## 팀 멤버

| 이름                                       | 직책 | 역할                                             |
| ------------------------------------------ | ---- | ------------------------------------------------ |
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 휴양림 API 호출 & 데이터 렌더링 (Main Page 구현) |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 무한 스크롤 구현 및 PageList 완성                   |
| [🎨문선경](https://github.com/dev-seomoon) | 팀장 | 휴양림 저장/삭제/수정 기능 구현                  |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 유저 피드백 (Toast UI) 구현                      |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 휴양림 저장/삭제/수정 기능 구현                  |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 로컬 스토리지에 데이터 저장 |
| [🚚최민우](https://github.com/exxocism)    | 팀원 | 검색 기능 구현                                   |

---

## 구현한 기능 목록

- API 호출을 통해 휴양림 목록 불러오기
- 무한 스크롤 구현 및 PageList 완성
- 휴양림 정보 클릭 시 저장/수정이 가능한 모달창 표시
- 휴양림 정보 저장/수정/삭제
- 저장된 휴양림 목록 검색
- 유저의 활동에 해당하는 toast 표시

---

## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 박진용

- ScrollView 컴포넌트 구현
- PageList 페이지 완성

#### 구현한 방법

##### ScrollView

|Name|Description|Type|Default|
|:-|:-|:-:|:-:|
|data|데이터 목록입니다.|any[]|X|
|threshold|onReachScrollEnd 함수가 호출되는 범위를 결정합니다.|number|0|
|renderItem|React 요소를 반환하는 함수입니다. data 배열의 요소가 인자로 전달됩니다.|(item) => ReactNode|X|
|keyExtractor|data 배열의 요소에서 key 용도의 값을 추출합니다.|(item) => string|X|
|onReachScrollEnd|스크롤의 마지막에 도달하면 호출되는 함수입니다. threshold 속성에 의해 실행시점이 변경될 수 있습니다.|() => void|X|

- 맨 밑까지 스크롤하면 `onReachScrollEnd` 함수가 자동으로 호출되도록 IntersectionObserver API를 이용해 구현했습니다.
- `threshold` 속성을 통해 맨 밑이 아닌 어느 정도 밑이면 `onReachScrollEnd` 함수가 호출되도록 변경할 수 있습니다.

##### PageList

- Main 페이지에서 사용하는 `CardContainer`와 `Card` 컴포넌트가 동일하므로, 이를 따로 분리하여 PageList 페이지에서 또한 호출했습니다.
- Modal 컴포넌트에 클릭한 data를 넘겨 메모를 추가하여 저장할 수 있도록 했습니다.

#### 어려웠던 점 (에러 핸들링)

- IntersectionObserver에서 options으로 받는 threshold는 관찰 중인 요소에 도달한 후에야 계산되는 값이었기 때문에, 그것보다도 미리 `onReachScrollEnd` 함수를 호출하기에는 무리였습니다. 대신 `rootMargin`의 bottom 값을 threshold로 설정하여 관찰 중인 요소가 안 보이더라도 호출하게끔 구현하였습니다.
- IntersectionObserver의 `root`이자 container인 `ul` 태그의 높이가 정해지지 않는다면, 자식 요소는 항상 `ul` 태그 안에 관찰되기 때문에 스크롤 높이와 무관하게 `onReachScrollEnd` 함수가 계속 호출되는 문제가 있었습니다. Container가 뷰포트의 높이보다 크다면, `root`를 container 대신 `null`로 변경하여 뷰포트를 기준으로 하는 방식으로 문제를 해결했습니다.
- ReactNode를 반환하는 함수 `renderItem`을 `map` 안에서 호출해야 할 때, jsx 문법은 동작하지 않았습니다. `cloneElement`를 이용하여 `key` 값을 추가로 전달해주면서 문제를 해결했습니다.


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
`Recoil`을 처음 사용해본 거라 공식문서와 유튜브 영상을 보면서 `Recoil`에 대해서 파악을 했었습니다. 찾아보면서 `Recoil`을 이용해서 [로컬 스토리지에 저장하는 코드](https://velog.io/@ye-ji/%EB%B0%9B%EC%95%84%EC%98%A8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0-Recoil%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC)를 찾게 되었고, 그 코드가 의미하는 것이 무엇인지 파악하려고 하였습니다. 여러 문서와 블로그에 대해 찾아보면서 테스트를 해 본 결과 코드에 대해 알 수 있었습니다.
#### 어려웠던 점 (에러 핸들링)
공공 데이터 api를 이용한 `cors`에 대한 오류 부분이 어려웠습니다.  proxy를 이용하는 `http-proxy-middleware` 라이브러리를 사용하는 방법도 생각하여 코드를 작성하기도 했었지만, 이 방법도 배포 시에도 해결되는 것이 아니라고 생각하였습니다. 결국 다른 팀원 분께서 생각하셨던 프록시 서버 URL을 붙여서 요청하는 방법이 더 배포하기에도 편리할 것 같다고 생각해서 그 방법으로 결정하였습니다. 그 후 netlify로 배포 후에도 CORS오류가 났었고, 블로그 또는 팀원들과 함께 문제를 해결할 수 있었습니다.

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
