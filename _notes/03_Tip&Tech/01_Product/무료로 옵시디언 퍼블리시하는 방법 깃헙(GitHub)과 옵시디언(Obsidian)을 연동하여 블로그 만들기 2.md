author:: by 오송인
source:: [무료로 옵시디언 퍼블리시하는 방법: 깃헙(GitHub)과 옵시디언(Obsidian)을 연동하여 블로그 만들기 2](https://slowdive14.tistory.com/1299824)
clipped:: [[2023-09-22]]
published:: 

#clippings #Obsidian

[2022.02.21 - \[하루하루/일상\] - 무료로 옵시디언 퍼블리시하는 방법: 깃헙(GitHub)과 옵시디언(Obsidian)을 연동하여 블로그 만들기](https://slowdive14.tistory.com/1299801)

[

무료로 옵시디언 퍼블리시하는 방법: 깃헙(GitHub)과 옵시디언(Obsidian)을 연동하여 블로그 만들기

옵시디언에서 한 달에 16000원인가 내면 옵시디언의 내용들 중 취사선택하여 개인 블로그로 퍼블리시하는 것이 가능합니다. 하지만 저는 제가 제일 공을 들이고 있는 영어공부에 쓸 돈도 없기 때

slowdive14.tistory.com



](https://slowdive14.tistory.com/1299801)![](https://scrap.kakaocdn.net/dn/ctOAc1/hyNH04xZUJ/jNFGx5oJ4QgnVkYnZsOUp0/img.png?width=800&height=401&face=0_0_800_401,https://scrap.kakaocdn.net/dn/HMD5N/hyNGHFvq75/cnB8ktJbQ3CRkOKQXZtoZk/img.png?width=800&height=401&face=0_0_800_401,https://scrap.kakaocdn.net/dn/pq6F4/hyNH0jbkaR/qL8JfjdBLKAF2E4cPc2N9K/img.png?width=1811&height=908&face=0_0_1811_908)

위 글에서 옵시디언의 웹 퍼블리싱에 성공한 템플릿은 1. 모든 백링크를 보여주지 않으며 2. 그래픽뷰가 지원되지 않는다는 한계를 지닙니다. 

이 두 가지를 보완하는 템플릿을 발견하여 공유합니다.

아래 유튜브에서 설명하는 그대로 따라서 설치하면 됩니다. 

![](https://scrap.kakaocdn.net/dn/cFJAgF/hyNH91twYr/MuMNINvzKLh70ymPN0Grf1/img.jpg?width=1280&height=720&face=0_0_1280_720)

한 가지 주의사항은 아래 예시처럼 반드시 front matter를 붙여야 사이트가 제대로 동작한다는 것입니다.

![](https://blog.kakaocdn.net/dn/djl9Q7/btrvWG46tfn/k1CSxNKQWjnVqKkXjA74U1/img.png)

제 옵시디언에는 300개 정도의 메모가 모였습니다.

1000개의 메모를 목표로 하고 있고, 아래 사이트를 이용하여 생각을 체계화하는 연습을 할 생각입니다. 

완성된 글의 일부를 티스토리 블로그와 브런치에 동시 발행할 생각이고요.

재미있는 사고 실험의 장이 될 것 같습니다.

[https://slowdive.netlify.app/](https://slowdive.netlify.app/)

[

Home

My digital garden

slowdive.netlify.app



](https://slowdive.netlify.app/)

페이지 예시를 캡처해 둡니다.

![](https://blog.kakaocdn.net/dn/BXO1j/btrvS6QZ4kl/9r86dvoSJMjyAtCqXx2qdK/img.png)

덧

1\. 파일명이 한글로 되어 있으면 그래픽뷰에서 에러가 나는 듯합니다. 링크/백링크 연결이 이상하게 이어집니다.

2\. 파일명이 영어여도 dog, dog2 이런 식이면 역시 그래픽뷰에서 분간을 못 하네요.

3\. 파일명이 영어여도 프론트매터 타이틀이 한글이면 그래픽뷰 연결이 잘 안 되네요. 

\-> 결론: 파일명과 프론트매터 모두 영어로 써야 하나 봅니다. 개발자에게 [버그 개선 요청](https://github.com/maximevaillancourt/digital-garden-jekyll-template/issues/100) 부탁한 상태인데 응답이 있을지 궁금하네요. 너무 심각한 오류라, 개선이 안 되면 또 다른 템플릿을 찾아봐야 할 것 같습니다. 

\- 이하 2022.03.15 내용 덧붙임 -

그래픽 뷰가 개선이 된다 해도 아직까지 버그가 많아 보여서 아예 없앴습니다. 제게 더 중요한 것은 백링크 지원이니까요.

없애는 방법은 깃헙이나 데탑의 해당 폴더 경로에서 \_layouts/note.html 찾으신 후 아래 빨간펜 친 부분을 삭제 후 저장하시면 됩니다. 데탑에서 하시는 경우에는

a. html 파일을 md 파일로 확장자 바꾼 후

b. Typora 같은 툴로 열어서 해당 행들 삭제하시고 저장한 후

c. 다시 html로 확장자 바꾸어

d. 깃헙 데탑 툴로 깃헙에 올리면 됩니다. 

![](https://blog.kakaocdn.net/dn/Yz4OM/btrvZ30A8Lp/G4EN8uEz77OTtSoMYklLe1/img.png)

사족이지만 20년도 더 전에 나모 웹에디터로 html 편집하여 ftp로 신나게 올리던 기억이 있네요. 그 때의 수많은 시행착오가 20년 후에 도움이 될지 누가 알았을까요. 뭐든 배워두면 언젠가 쓸 때가 있네요.

\- 이하 2022.03.16 덧붙임 -

![](https://blog.kakaocdn.net/dn/cODs1c/btrv3gsdvjo/RH3NeikRSavvGoPAjywPBK/img.png)

개발자께서 하루만에 고쳐줬습니다. 이제 잘 작동합니다.

![](https://blog.kakaocdn.net/dn/HZ3WY/btrvZH4gDp9/O8ucSQ36oX26tlEElhc6Wk/img.png)

[Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)하라고 하는데 시행착오 끝에 Fetch upstream 찾는 것까진 성공했으나 버튼 활성화가 안 된 상태라, 결국 원본 템플릿 zip 파일을 다시 다운 받아서 올렸네요. 어디로 가든 서울로만 가면 되니까요. 

![](https://blog.kakaocdn.net/dn/xDRTn/btrv4zEoQuD/AJ3VChnvjiqzTBqPMNxoOK/img.png)