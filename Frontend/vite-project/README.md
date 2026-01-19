# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

"open new terminal Navigate the folder follow given below cmd"
   1. Create virtual environment
       cd Employee
       cd Backend
       python -m venv venv
   2. Activate virtual environment
       venv\Scripts\activate  
   3. Upgrade pip (optional but recommended)
       python -m pip install --upgrade pip    
   4. Install requirements
       pip install -r requirements.txt
   5. If you get the pkgutil error, upgrade Flask
       pip install --upgrade Flask==3.0.0
   6. Run the app
       python app.py

Frontend Run commands open new terminal Navigate the folder follow given below cmd

1.select new terminal
2.cd Employee
3.cd Frontend
4.cd Vite-project
5.npm install
6.npm run dev