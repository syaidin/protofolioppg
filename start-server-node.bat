@echo off
echo ========================================
echo   E-Portfolio PPG - Local Server (Node)
echo ========================================
echo.
echo Mengecek http-server...
echo.

where /q npx
if ERRORLEVEL 1 (
    echo Node.js/NPM tidak terinstall!
    echo Silakan gunakan start-server.bat (Python) sebagai gantinya
    pause
    exit /b
)

echo Server akan berjalan di: http://localhost:8000
echo Buka browser dan akses: http://localhost:8000
echo.
echo Tekan Ctrl+C untuk menghentikan server
echo ========================================
echo.

cd /d "%~dp0"
npx http-server -p 8000 -o

pause
