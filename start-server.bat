@echo off
echo ========================================
echo   E-Portfolio PPG - Local Server
echo ========================================
echo.
echo Server akan berjalan di: http://localhost:8000
echo Buka browser dan akses: http://localhost:8000
echo.
echo Tekan Ctrl+C untuk menghentikan server
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
