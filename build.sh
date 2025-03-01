#!/bin/sh

# 현재 작업 디렉터리 출력 (디버깅)
echo "🔍 Current Directory:"
pwd

echo "📂 Listing Directory Contents:"
ls -al

# output 폴더 생성
mkdir -p "./output"

# 특정 디렉터리를 rsync로 복사 (현재 src가 존재하는 경로 반영)
if [ -d "./src" ]; then
  echo "📁 Found src directory. Proceeding with rsync..."
  rsync -av --exclude='.git' "./src/" "./output/"
else
  echo "❌ Error: src directory not found!"
  exit 1
fi

# output 폴더가 비어있는지 확인 후 복사 실행
if [ "$(ls -A "./output")" ]; then
  echo "✅ Output directory is not empty. Proceeding with copy..."
  cp -R "./output/"* "./"
  
  # ✅ 복사 완료 후 output 폴더 삭제
  echo "🗑️ Removing output directory..."
  rm -rf "./output"

  echo "✅ Output directory successfully removed."
else
  echo "❌ Error: Output directory is empty. Check rsync command."
  exit 1
fi
