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

#### today-plan


||index|요일|planList|done|달성률|
|---|---|---|---|---|---|
|데이터타입|Number|String|List|boolean|Number
|값 얻는 방법|유저가 계획을 입력한 날짜|유저가 계획 입력할때의 요일|유저가 입력한 계획들이 기존의 list에 push 됨|유저가 완료 버튼 toggle 시 true로 변환|done이 true인 개수/plan의 개수|
|예시|4|Friday|[{'plan':"코딩테스트 2문제 풀기",'done': false}]|false|0|


    저장 형태 
    today-plan = [ 
        {
        'index': 20211122,
        'day' : 'wendesday',
        'planlist' : [
            {
                plan: '토익 1day 단어 외우기',
                done: false
            }, 
            {
                plan : 'localStorage 설정하기',
                done: true
            }
        ]
        'achivement' : done true 개수 / planList.length
        },
    ]

#### week-plan

||index|planList|done|달성률|
|---|---|---|---|---|
|데이터타입|Number|List|boolean|Number|
|값 얻는 방법|유저가 계획 입력한 날짜 (년월) + 주차수 합친 값(하루계획 입력하면 자동 업데이트)|유저가 새롭게 week 계획 입력할 경우 기존 object에 업데이트|유저가 버튼 toggle|done이 true인 개수 / 주차수의 plan 개수|
|예시|20211204|[{'plan':"책한권읽기", done : true}|true|100|


    저장형태
    week-plan = [
        {
            index : 2021124,
            planList : [
                {
                    'plan' : '일기 매일 쓰기',
                    'done' : true 
                }
            ],
            achivement : done이 true인 elemenet 개수 / planList.length
        }

    ]