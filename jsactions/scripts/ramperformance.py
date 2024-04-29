import psutil
import sys

def get_ram_usage():
    try:
        #while not stop_signal.is_set():
        #get script arguments from javascript
        script_first_value = sys.argv[1]
        BENCHMARK_VALUE = sys.argv[2]
                
        # # Get process object
        application_process_ID = int(script_first_value)
        
        operation = psutil.Process(application_process_ID)

        # # Get memory usage
        info_mem = operation.memory_info()
        usage_mem_mb = info_mem.rss / 1024 / 1024



        return usage_mem_mb
        #return ram_usage_list
        
        # if usage_mem_mb > benchmarkValue:
        #     raise ValueError(f"Analysis failed.")
        # else:
        #     return usage_mem_mb
        

    except Exception as e:
        raise ValueError(f"Process has discontinued.")
    


    
if __name__ == "__main__":

    ram_usage = get_ram_usage()
    print(ram_usage)



