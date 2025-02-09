# 📌 Guía Básica de Comandos Git

## 📝 Introducción
Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y colaborar con otros desarrolladores. GitHub es una plataforma basada en Git que permite alojar repositorios y gestionar proyectos de manera eficiente.

---

## 📌 Comandos básicos de Git

| Comando | Descripción |
|---------|------------|
| `git init` | Inicializa un nuevo repositorio en la carpeta actual. |
| `git clone <URL>` | Clona un repositorio remoto en tu máquina local. |
| `git status` | Muestra el estado de los archivos en el repositorio. |
| `git add <archivo>` | Añade un archivo específico al área de preparación (staging). |
| `git add .` | Añade todos los archivos modificados al área de preparación. |
| `git commit -m "mensaje"` | Guarda los cambios en el historial con un mensaje. |
| `git log` | Muestra el historial de commits. |
| `git push origin <rama>` | Sube los commits de la rama local al repositorio remoto. |
| `git pull origin <rama>` | Descarga y fusiona los cambios desde el repositorio remoto. |
| `git fetch` | Descarga los cambios del repositorio remoto sin fusionarlos automáticamente. |
| `git diff` | Muestra las diferencias entre los archivos modificados y la última versión confirmada. |
| `git show <commit>` | Muestra los detalles de un commit específico. |
| `git branch` | Lista todas las ramas disponibles. |
| `git branch <nombre-rama>` | Crea una nueva rama. |
| `git checkout <nombre-rama>` | Cambia a una rama específica. |
| `git checkout -b <nombre-rama>` | Crea una nueva rama y cambia a ella. |
| `git merge <rama>` | Fusiona una rama en la actual. |
| `git branch -d <nombre-rama>` | Elimina una rama local. |
| `git branch -m <nombre-nuevo>` | Cambia el nombre de la rama actual. |
| `git reset --hard <commit>` | Restaura el repositorio a un commit específico. |
| `git reset --soft <commit>` | Restaura a un commit sin eliminar los cambios en el área de preparación. |
| `git revert <commit>` | Crea un nuevo commit que revierte un commit anterior. |
| `git rm --cached <archivo>` | Elimina un archivo del control de versiones pero lo mantiene en el disco. |
| `git remote -v` | Muestra los repositorios remotos vinculados. |
| `git remote remove <nombre>` | Elimina un repositorio remoto vinculado. |
| `git stash` | Guarda temporalmente los cambios sin hacer commit. |
| `git stash pop` | Restaura los cambios guardados con `stash`. |
| `git stash list` | Muestra una lista de los cambios almacenados temporalmente. |
| `git stash drop` | Elimina un conjunto de cambios guardados con `stash`. |
| `git tag <nombre>` | Crea una etiqueta en un commit específico. |
| `git tag -d <nombre>` | Elimina una etiqueta. |
| `git cherry-pick <commit>` | Aplica un commit específico en la rama actual. |
| `git reflog` | Muestra el historial de cambios en la referencia de HEAD. |
| `git blame <archivo>` | Muestra quién hizo cada cambio en un archivo. |

