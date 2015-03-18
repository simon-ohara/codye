# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 80, host: 8080, auto_correct: true
  config.vm.define "CoDye-Env"

  config.vm.provider "virtualbox" do |v|
    v.name = "JS Dev Stack :: CoDye"
    v.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.provision "shell", path: ".provision/setup"
end
