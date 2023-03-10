<?php
$url = "https://pixeldrain.com/api/file/rxvomvuEE";
$key = "my_secret_key"; // Clave secreta para cifrar la URL

$cipher = "AES-128-CBC"; // Algoritmo de cifrado
$ivlen = openssl_cipher_iv_length($cipher); // Longitud del vector de inicialización
$iv = openssl_random_pseudo_bytes($ivlen); // Vector de inicialización generado aleatoriamente

$encrypted_url = openssl_encrypt($url, $cipher, $key, OPENSSL_RAW_DATA, $iv); // Cifrar la URL

$iv = base64_encode($iv); // Convertir el vector de inicialización a base64
$encrypted_url = base64_encode($encrypted_url); // Convertir la URL cifrada a base64

// Construir la URL cifrada
$final_url = "https://jhancarlos301.github.io/repro/index.php" . urlencode($encrypted_url) . "&iv=" . urlencode($iv);

echo "URL cifrada: " . $final_url;
?>
