@echo off
echo ========================================
echo   Push E-Portfolio ke GitHub
echo ========================================
echo.

REM Cek apakah git sudah terinstall
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git belum terinstall!
    echo Silakan install Git terlebih dahulu dari: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo Git sudah terinstall. Lanjutkan...
echo.

REM Masuk ke direktori project
cd /d "%~dp0"

REM Cek apakah sudah ada .git folder
if not exist ".git" (
    echo Inisialisasi Git repository...
    git init
    echo.
)

REM Tambahkan semua file
echo Menambahkan semua file...
git add .
echo.

REM Commit
echo Membuat commit...
git commit -m "Add UAS menu and E-Portfolio 1 with 6 analysis components"
echo.

REM Instruksi untuk user
echo ========================================
echo LANGKAH SELANJUTNYA:
echo ========================================
echo.
echo 1. Buka GitHub.com dan buat repository baru
echo 2. Copy URL repository Anda (contoh: https://github.com/username/repo.git)
echo 3. Jalankan command berikut (ganti URL dengan URL Anda):
echo.
echo    git remote add origin https://github.com/USERNAME/REPO.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ========================================
echo.

pause
