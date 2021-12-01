## 로컬 스토리지를 통한 유저의 정보 입력받기 

### 계획

localStorage 사용 

(api활용한 데이터 관리는 local server관리 하는 node.js 학습 후 적용해볼 예정)

### 시나리오 

makePlan페이지에서 오늘의 목표와 주 단위의 목표를 입력할 수 있음 

유저가 목표를 달성 한 후 체크를 하게 되면 rating이 올라가고 rating만큼 화면에 그려짐 

유저가 하루별 계획 입력 -> user-today-plan 의 데이터 개수로 id가 부여됨 -> 현재의 날짜를 받아와 요일과 날짜 값을 저장한다 -> 유저가 계획 달성 버튼을 눌렀을 때 done이 toggle이 된다 -> 날짜별로 계산을 하여서 달성률을 보여준다 -> 유저에게 보여질때에는 오늘 날짜를 기준으로 계획들이 조회되어 보여진다 

#### 유저에게 입력받는 데이터 종류 

||오늘의 목표들|오늘의 목표 달성 여부|주간 목표|주간목표 달성여부|
|---|---|---|---|---|
|데이터타입|string|true/false|string|true/false|
|입력받는 방법|유저가 input에서 입력|유저가 버튼을 통해서 toggle|유저가 input에서 입력|유저가 버튼을 통해서 toggle|
|초기값|""|false|""|false|
|나누는 단위|요일별로 다르게|계획별로|주 단위(한달 4번)|계획 별로|
|저장되는 데이터테이블|user-today-plan|user-today-plan|user-week-plan|user-week-plan|


### 데이터베이스 

#### user-today-plan


||id|요일|날짜|plan|done|달성률|
|---|---|---|---|---|---|---|
|데이터타입|Number|String|String|String|boolean|Number
|값 얻는 방법|계획의 전체개수로|유저가 계획 입력할때의 요일|유저가 계획 입력할 때의 요일|유저가 입력|유저가 버튼 toggle|done이 true인 개수/같은 날짜의 plan개수|
|예시|4|Friday|2021.12.03|"코딩테스트 2문제 풀기"|false|0|


#### user-week-plan

||id|주차수|년|월|plan|done|달성률|
|---|---|---|---|---|---|---|---|
|데이터타입|Number|Number|Number|String|String|boolean|Number|
|값 얻는 방법|계획 입력때마다 +1|유저가 입력한 시점을 기준으로|유저가 입력한 시점을 기준으로|유저가 입력한 시점을 기준으로|유저가 입력|유저가 버튼 toggle|done이 true인 개수 / 주차수의 plan 개수|
|예시|1|1|2021|12|"책한권읽기"|true|1|




