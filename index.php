<?php

#VIDEO
$video = 'https://pixeldrain.com/api/file/rxvomvuE';
$videoData = base64_encode(file_get_contents($video));
$src_video = 'data: '.mime_content_type($video).';base64,'.$videoData;

echo 
'
	<video width="100%" height="100%" controlslist="nodownload" controls>
		<source src="'. $src_video. '" type="video/mp4">
	</video>


';
?>