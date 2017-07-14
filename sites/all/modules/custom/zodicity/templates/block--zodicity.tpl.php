<?php
//dpm($variables['ref_link']);
	$content = '<div class="block-grp '.$variables['block-class'].'">';
        $content .= '<div class="title">'.$variables['title'].'</div></div>';
	/*$content .= '<div class="cnt-title"><div class="count">'.$variables['count'].'</div>';
	$content .= '<div class="title">'.$variables['title'].'</div></div>';
	$content .= '<div class="icon '.$variables['icon-class'].'" ></div></div>';
	$variables['ref_link']['options']['html']=TRUE;
	$output = l($content,$variables['ref_link']['path'],$variables['ref_link']['options']);
         */
	///$output = l($content,$variables['ref_link']['path']);
	print $content;
	

?>
