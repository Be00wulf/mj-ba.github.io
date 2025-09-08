# Proyecto de Consola: POO en C# desde Manjaro/Linux con VSCode

## Descripción
Proyecto para practicar **Programación Orientada a Objetos (POO)** en C# usando **.NET 9** y **Visual Studio Code** en Manjaro Linux.

---

## 1. Crear un proyecto de consola

1. Abre la **terminal** en Manjaro.  
2. Dirígete a la ubicación donde quieres crear tu proyecto:
   ```bash
   cd ~/Documentos/Proyectos
   ls
   mkdir pj-console
   cd pj-console
   ```

3. Crea un nuevo proyecto de consola

   ```bash
   dotnet new console -n ProyectoConsolaPOO
   ```
> Esto creará una carpeta llamada ProyectoConsolaPOO con la estructura básica de un proyecto de consola

4. Ingresa a la carpeta del proyecto

   ```bash
   cd ProyectoConsolaPOO
   ```

5. Abre el proyecto en VSCode:
   ```bash
   code .
   ```

## 2. Estructura del proyecto
Dentro de la carpeta hallaras una carpeta con archivos como Program.cs ( que es el archivo principal de ejecución), ProyectoConsolaPOO.csproj (que es el archivo de configuración del proyecto) y obj/ (que es la carpeta de archivos temporales de compilación)

## 3. Ejecutar el proyecto
Para compilar y ejecutar desde la terminal

   ```bash
   dotnet run
   ```
> Cada vez que hagas cambios en Program.cs, solo necesitas ejecutar dotnet run nuevamente para ver los resultados.

Prueba un ejemplo simple en Program.cs
   ```bash
   Console.WriteLine("Hola mundo");
   ```

## 4. Compilación avanzada y limpieza
Durante la compilación se crean las carpetas bin y obj.
Si quieres limpiar y recompilar tu proyecto:
   ```bash
   dotnet clean
   dotnet build
   dotnet run
   ```
>Esto asegura que todo se recompila desde cero y evita errores acumulados de compilación.
