<?php

    $config = array(
    'upload_path' => './lokasifoto',
    'allowed_types' => 'gif|jpg|JPG|png',
    'max_size' => '150',
    );
    $this->load->library('upload', $config);
    $this->upload->do_upload('foto');
    $upload_data = $this->upload->data();
    $nama_file = $upload_data['file_name']; 
