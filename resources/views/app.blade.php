<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{ asset('/images/logo.png') }}" type="image/png">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @inertiaHead
    <title>Portfolio | Bagas Aditia</title>
</head>

<body class="bg-main">
    <div class="container mx-auto md:px-20">
        @inertia
    </div>
</body>

</html>
