# Obsidian Workflow

이 저장소를 그대로 Obsidian Vault로 열어서 사용합니다.

## Writing Path

- 공개 글 작성 위치: `source/_posts/`
- 비공개/연구 메모 위치: `notes/`
- 카테고리:
  - `ai`
  - `backend`
  - `frontend`
  - `homelab`

## Recommended Flow

1. Obsidian에서 이 저장소 루트를 Vault로 엽니다.
2. 생각 정리, 조사, 초안은 먼저 `notes/` 아래에 작성합니다.
3. 공개할 글만 `source/_posts/` 로 옮기거나 새로 만듭니다.
4. 공개 글은 `templates/blog-post-template.md`를 사용합니다.
5. 비공개/연구 메모는 `templates/note-template.md`를 사용합니다.
6. Obsidian Git 플러그인으로 commit / push 합니다.
7. GitHub Pages 배포가 완료되면 `source/_posts/`의 글만 사이트에 반영됩니다.

## LLMWiki

- LLMWiki 인덱싱 권장 대상:
  - `notes/**/*.md`
  - `source/_posts/**/*.md`
- LLMWiki 인덱싱 제외 권장 대상:
  - `public/`
  - `node_modules/`
  - `themes/`
  - `.obsidian/`
  - `.github/`

즉, 같은 저장소를 쓰되
- `notes/` 는 지식베이스/작업 메모
- `source/_posts/` 는 공개 발행 글
로 역할을 나눕니다.

## Notes

- `.obsidian/` 폴더는 현재 gitignore 대상입니다.
- 즉, Obsidian 개인 설정과 플러그인 설정은 로컬에만 남습니다.
- 이미지 첨부를 쓸 경우, 나중에 `source/images/` 같은 규칙을 따로 정하는 편이 안전합니다.
