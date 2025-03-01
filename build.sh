#!/bin/sh

# 현재 작업 디렉터리 출력 (디버깅)
echo "🔍 Current Directory:"
pwd

echo "📂 Listing Directory Contents:"
ls -al

# 작업 레포지토리명 (GitHub Actions에서 `FrontEnd`로 실행됨)
REPO_NAME="FrontEnd"

# output 폴더 생성
mkdir -p "./$REPO_NAME/output"

# 특정 디렉터리를 rsync로 복사
if [ -d "./$REPO_NAME/src" ]; then
  echo "📁 Found src directory inside $REPO_NAME. Proceeding with rsync..."
  rsync -av --exclude='.git' "./$REPO_NAME/src/" "./$REPO_NAME/output/"
else
  echo "❌ Error: src directory not found inside $REPO_NAME!"
  exit 1
fi

# output 폴더가 비어있는지 확인 후 복사 실행
if [ "$(ls -A "./$REPO_NAME/output")" ]; then
  echo "✅ Output directory is not empty. Proceeding with copy..."
  cp -R "./$REPO_NAME/output/"* "./$REPO_NAME/"
  
  # ✅ 복사 완료 후 output 폴더 삭제
  echo "🗑️ Removing output directory..."
  rm -rf "./$REPO_NAME/output"

  echo "✅ Output directory successfully removed."
else
  echo "❌ Error: Output directory is empty. Check rsync command."
  exit 1
fi
