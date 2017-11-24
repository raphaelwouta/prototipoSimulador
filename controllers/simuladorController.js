angular.module("simuladorTelefonia")
    .controller("simuladorController", function ($scope) {
        $scope.data = {};
        
        $scope.mdEntregaPAChamadaFunction = function () {
            if ($scope.data.mdEntregaPAChamada) {
                $scope.data.mdEntregaPAChamada = SubstituirVircula($scope.data.mdEntregaPAChamada);
                $scope.data.mdQtdChamPa = (1/$scope.data.mdEntregaPAChamada) * 100;
                return $scope.data.mdQtdChamPa;
            } else {
                return 0;
            }
        };

        $scope.adEntregaPAChamadaFunction = function () {
            if ($scope.data.adEntregaPAChamada) {
                $scope.data.adEntregaPAChamada = SubstituirVircula($scope.data.adEntregaPAChamada);
                $scope.data.adQtdChamPa = (1/$scope.data.adEntregaPAChamada) * 100;
                return $scope.data.adQtdChamPa;
            } else {
                return 0;
            }
        };

        $scope.mdQtdChamUmCpcFunction = function () {
            if ($scope.data.mdCPCEntregaPA && $scope.data.mdEntregaPAChamada) {
                $scope.data.mdCPCEntregaPA = SubstituirVircula($scope.data.mdCPCEntregaPA);
                $scope.data.mdEntregaPAChamada = SubstituirVircula($scope.data.mdEntregaPAChamada);
                $scope.data.mdQtdChamUmCpc = ((1/($scope.data.mdCPCEntregaPA * $scope.data.mdEntregaPAChamada)) * 100) *100;
                return $scope.data.mdQtdChamUmCpc;
            } else {
                return 0;
            }
        };

        $scope.adQtdChamUmCpcFunction = function () {
            if ($scope.data.adCPCEntregaPA && $scope.data.adEntregaPAChamada) {
                $scope.data.adCPCEntregaPA = SubstituirVircula($scope.data.adCPCEntregaPA);
                $scope.data.adEntregaPAChamada = SubstituirVircula($scope.data.adEntregaPAChamada);
                $scope.data.adQtdChamUmCpc = ((1/($scope.data.adCPCEntregaPA * $scope.data.adEntregaPAChamada)) * 100) * 100;
                return $scope.data.adQtdChamUmCpc;
            } else {
                return 0;
            }
        };
        
        $scope.mdQtdCliTrabPAFunction = function () {
            if ($scope.data.mdEntregaPACliTrab) {
                $scope.data.mdEntregaPACliTrab = SubstituirVircula($scope.data.mdEntregaPACliTrab);
                $scope.data.mdQtdCliTrabPA = (1/$scope.data.mdEntregaPACliTrab) *100;
                return $scope.data.mdQtdCliTrabPA;
            } else {
                return 0;
            }
        };

        $scope.adQtdCliTrabPAFunction = function () {
            if ($scope.data.adEntregaPACliTrab) {
                $scope.data.adEntregaPACliTrab = SubstituirVircula($scope.data.adEntregaPACliTrab);
                $scope.data.adQtdCliTrabPA = (1/$scope.data.adEntregaPACliTrab) *100;
                return $scope.data.adQtdCliTrabPA;
            } else {
                return 0;
            }
        };

        $scope.mdMediaChamTriagemCPCFunction = function () {
            if ($scope.data.mdQtdMediaChamCiclo && $scope.data.mdTriagemCPC) {
                $scope.data.mdQtdMediaChamCiclo = SubstituirVircula($scope.data.mdQtdMediaChamCiclo);
                $scope.data.mdTriagemCPC = SubstituirVircula($scope.data.mdTriagemCPC);

                $scope.data.mdMediaChamTriagemCPC = ($scope.data.mdQtdMediaChamCiclo/ $scope.data.mdTriagemCPC); 
                return $scope.data.mdMediaChamTriagemCPC;
            } else {
                return 0;
            }
        };

        $scope.adMediaChamTriagemCPCFunction = function () {
            if ($scope.data.adQtdMediaChamCiclo && $scope.data.adTriagemCPC) {
                $scope.data.adQtdMediaChamCiclo = SubstituirVircula($scope.data.adQtdMediaChamCiclo);
                $scope.data.adTriagemCPC = SubstituirVircula($scope.data.adTriagemCPC);

                $scope.data.adMediaChamTriagemCPC = ($scope.data.adQtdMediaChamCiclo/ $scope.data.adTriagemCPC); 
                return $scope.data.adMediaChamTriagemCPC;
            } else {
                return 0;
            }
        };
        
        function SubstituirVircula (valor) {
            valor = valor.replace(",", ".");
            return valor;
        }
    })
    .controller("TimePickerController", ["$scope", function ($scope) {        

        $scope.mdTempo = new Date(2017, 10, 01, 0, 0, 0, 0);
        $scope.adTempo = new Date(2017, 10, 01, 0, 0, 0, 0);

        $scope.hstep = 1;
        $scope.mstep = 1;
        $scope.sstep = 1;

        $scope.showSeconds = true;
        $scope.showMeridian = false;
    }]);

  