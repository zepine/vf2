## 개발 환경 설정

앱 제작에 필요한 개발 환경 설정

### 필수 프로그램 설치

1. node.js 설치
     - 다운로드 : <https://nodejs.org/>
     - PowerShell 실행 정책 변경
    `RemoteSigned` @ `CurrentUser`

2. git 설치
다운로드 : <https://git-scm.com/>

3. vscode 설치
다운로드 : <https://code.visualstudio.com/>

### PowerShell 실행 정책 불러오기

출처 : [about_Execution_Policies](https://docs.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1) @Microsoft

```PowerShell
Get-ExecutionPolicy -List

(output)
Scope ExecutionPolicy
-- 
MachinePolicy       Undefined
UserPolicy       Undefined
Process       Undefined
CurrentUser    RemoteSigned
LocalMachine       AllSigned
```

### 실행 정책 변경

```PowerShell
Set-ExecutionPolicy -ExecutionPolicy <PolicyName> -Scope <scope>

(예) Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

> RemoteSigned : 로컬 스크립트 및 원격 서명된 스크립트 허용

### 실행 정책 제거

```PowerShell
set-executionPolicy -executionPolicy **undefined** -scope currentuser
```

### 프로젝트 만들기

1. 폴더 만들기
`mkdir <name>`
2. 상기 폴더에 package.json 파일 만들기
`npm init`

### Node.JS 시작하기

- js 파일 실행하기

  ```PowerShell
  node <파일 이름>
  node . //현재 디렉토리(.) 하위 index 파일 실행
  ```

- 모듈 다운로드/실행
  - 패키지(package.json) 파일 생성
  `npm init`
  - 코더는 npm을 통해 다양한 모듈을 다운로드 받아 활용할 수 있음.
  - `npm init`으로 package.json 파일을 먼저 생성.
  - 프로젝트 또는 실행 파일에 대한 **이름표**와 같은 역할.
  - npm은 package.json 파일이 준비되어야만 모듈을 내려받아 활용할 수 있음.
  - 다시 말해, package.json 파일은 모듈 설치를 위한 필수 준비 작업. `node init`이 아님.
  
### Vue CLI 설치

1. vue-cli 설치
`npm install -g @vue/cli`
2. 프로젝트 생성
`npm create <project/folder name>`
(vuetify 사용 시, vue2 버전 설치 (필수))
3. 프로젝트 폴더 이동
`cd <folder name>`
4. 서버 실행
`npm run serve`

> 참고: CLI = Command-Line interface

### git에 remote repository 추가(연동)하기

- qucik setup

```powershell
echo "## vf" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/zepine/vf.git
git push -u origin main
```

1. 준비 : git 설치, github 계정 생성-repository 생성
2. (프로젝트 파일 폴더에서) git 초기화
`git init`
3. github에서 repository 생성
4. git에 remote repository 추가(연동)
`git remote add origin <repository URL>`
[도움말](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
5. 추가가 제대로 됐는지 확인
`git remote -v`

### commit 오류

commit 시 git 사용자 이메일과 이름을 설정하라는 오류 발생 시 아래 설정하기

```powershell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### 다른 컴퓨터에서 remote repository 사용

1. remote repository 클론(clone)
`git clone <repository URL>`
[도움말](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository)
2. modules 다운로드
`npm i`
3. 서버 실행(정상 작동 테스트)
`npm run server`

### VS CODE 에디터 설정

extension 설치

1. ESLint 설치
2. git history 설치
3. auto close tag, auto rename tag 설치

### Router 알아보기 (SPA)

SPA 개념을 활용 [more](https://eastflag.co.kr/fullstack-spa_definition/)

### Vuetify 설치

- [Vuetify 홈페이지](https://vuetifyjs.com/en/getting-started/installation/)
- bootstrap과 같은 기능을 하는 CSS framework
- 설치하기 (vue에 vuetify를 추가)
`vue add vuetify`

> 오류: vuetify 설치 시 중간에 에러 발생.
> 이유: vuetify가 vue 3 버전을 지원하지 않음.
> 해결: vue 프로젝트 생성 시 vue 2 버전을 선택.
> 초보자 주의: Vue/Cli의 버전은 vue의 버전이 아님.

### UI

1. [App bars](https://vuetifyjs.com/en/components/app-bars/)
2. [Footer](https://vuetifyjs.com/en/components/footer/)
3. [Navigation Drawers](https://vuetifyjs.com/en/components/navigation-drawers/)

### Components 활용하기

1. App.vue
 `<menu-bar></menu-bar>`
  // 실제 코드를 대체하는 태그
2. Menu.vue (components라는 폴더에 저장)
  // 실제 코드가 담긴 외부 문서.
  // Menu.vue에 담긴 코드를 component화 해서 App.vue에서 구현하는 게 목표.
3. App.vue
  `<script> import MenuBar from "./components/Menu.vue" </script>`
  // 먼저, import 명령으로 변수(MenuBar)에 Menu.vue 문서를 정의한다.
4. App.vue

    ```javascript
    <script>
    export default {
      components: { MenuBar }
    }
    <script>
    ```

    // 이제는 외부 코드가 담긴 변수를 component화 한다.
    // export 영역에서 components 프로퍼티에 해당 변수를 정의. 이제 App.vue 문서에서 외부 코드를 자유롭게 사용할 준비가 됐음.
5. App.vue
 `<menu-bar></menu-bar>`
  // 외부 코드가 담긴 변수 MenuBar (pascal case or camel case)를 **kebab case**로 변환(menu-bar).
  // 이를 태그명으로 하여 원하는 위치에 삽입하면 끝.
  
#### v-bind:의 약어는 :(colon)

  1. App.vue) data 프로퍼티에 string 추가
  2. App.vue) 컴포넌트 태그에서 상기 string을 v-bind(or : 콜론) 함
  3. 컴포넌트 파일) 상기 컴포넌트 태그와 연결된 파일에 export, probs 2 v-bind 변수 삽입
  4. 컴포넌트 파일) template 영역의 원하는 위치에

### 확장 메뉴 구현

[Expansion Lists](https://vuetifyjs.com/en/components/lists/#expansion-lists) 코드 활용

### Firebase 시작하기

1. Google Firebase [계정 만들기](https://firebase.google.com/)
   1. 프로젝트 만들기
   2. 웹 앱 추가 (프로젝트 설정)
2. Firebase설치하기 (terminal)
   1. [Firebase CLI 설치](https://firebase.google.com/docs/cli?authuser=2#install_the_firebase_cli)
   `npm install -g firebase-tools`
   2. [Firebase CLI 테스트](https://firebase.google.com/docs/cli?authuser=2#sign-in-test-cli)
      1. Firebase 로그인
      `firebase login`
      2. Firebase 프로젝트 리스트 불러오기
      `firebase projects:list`

   3. [Firebase 프로젝트 초기화](https://firebase.google.com/docs/cli?authuser=2#initialize_a_firebase_project)
      1. 프로젝트 디렉토리(폴더) 생성
      2. 프로젝트 초기화 `firebase init`
      기본 firebase 프로젝트 설정 및 기타 구성 설정, 프로젝트 디렉토리에 `firebase.json`(프로젝트 구성 정보), `.firebaserc`([프로젝트 별칭 저장](https://firebase.google.com/docs/cli?authuser=2#project_aliases)) 파일 생성

### Firebase SDK 추가 [link](https://firebase.google.com/docs/web/setup?authuser=2#add-sdks-initialize)

  1. Firebase SDK 추가
  `npm install firbase`
  2. 필요한 Firebase 모듈 import
  plugins > firebase.js

      ```javascript
      import Vue from 'vue'
      import * as firebase from 'firebase/app'
      import 'firbase/auth'
      import 'firebase/firebase-database' // change to 'database' only
      ```

  3. 앱에서 Firebase 초기화
      `firebase.initializeApp(firebaseConfig)`
  4. `firebaseConfig` (앱의 키 및 식별자가 포함된 구성 객체 - Firebase console의 '내 앱')을 외부 파일로 만들고,
  firebaseConfig.js

      ```firebaseConfig
      export default {
        apiKey: 'AIzaSyA36Fo7Db9EGzjDG-kj6f8ZtqIVIiXaZOY',
        authDomain: 'vuefirebaseproj.firebaseapp.com',
        databaseURL: 'https://vuefirebaseproj-default-rtdb.asia-southeast1.firebasedatabase.app',
        projectId: 'vuefirebaseproj',
        storageBucket: 'vuefirebaseproj.appspot.com',
        messagingSenderId: '370569004978',
        appId: '1:370569004978:web:d5f726c2f5922244fe06ab'
      }
      ```

  5. firebase.js에서 improt 함
  `import firebaseConfig from '../../firebaseConfig'`
  6. main.js에서 firebase, import 하기
  `import './plugins/firebase'`

### 테스트 해보기

   1. 전역객체로서 firebase가 잘 출력되는지 확인하기
   App.vue

      ```javascript
      export default {
        mounted () {
        console.log(this.$firebase)
        }
      }
      ```

   2. 버튼 눌렀을 때 console.log 출력하기

      ```javascript
      //App.vue에 버튼 UI 추가
      <v-btn icon @click="save"><v-icon>mdi-check</v-icon></v-btn>

      //App.vue에 메서드 추가
      methods: {
        save () {
          console.log('아이콘을 눌렀습니다')
        }
      }
      ```

### Realtime Database 쓰고 읽기

> 오류: Realtime Database 쓰고 읽기 안 됨. 해당 코드가 반영된 지점은 git에서 '오류지점'으로 검색. 이후 강의 파일로 덮어씌어 봤으나 동일 현상. 오류 나는 원인 찾기 중.
> 해결: Firebase 개발 문서를 토대로 코드 변경.

1. [Firebase 초기화](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize)
2. [데이터 쓰기](https://firebase.google.com/docs/database/web/read-and-write#write_data)
3. import/export 정확히 이해하기

- [참고 사이트 1](https://ko.javascript.info/import-export)
- [참고 사이트 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- 강의와 Firebase 문서에 적용된 import/export의 활용 방식이 다름. 두 차이점을 정확히 알고 이해하려면 위 사이트를 참고할 것.
